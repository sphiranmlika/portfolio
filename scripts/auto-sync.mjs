
import chokidar from "chokidar";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execFile);

const BRANCH = "main";
const DEBOUNCE_MS = 2500;

let debounceTimer;
let isSyncing = false;
let pendingSync = false;

async function git(args) {
  const { stdout } = await exec("git", args, {
    windowsHide: true,
  });

  return stdout.trim();
}

async function syncToGitHub() {
  if (isSyncing) {
    pendingSync = true;
    return;
  }

  isSyncing = true;

  try {
    const branch = await git(["branch", "--show-current"]);

    if (branch !== BRANCH) {
      console.log(`Skip: current branch is ${branch}`);
      return;
    }

    const status = await git(["status", "--porcelain"]);

    if (!status) {
      return;
    }

    console.log("\nChanges detected. Syncing...");

    await git(["add", "-A"]);

    // Tidak membuat commit kosong
    try {
      await git(["diff", "--cached", "--quiet"]);
      console.log("No staged changes.");
      return;
    } catch (error) {
      if (error.code !== 1) throw error;
    }

    const message = `chore: auto-sync ${new Date().toISOString()}`;

    await git(["commit", "-m", message]);

    await git(["push", "origin", BRANCH]);

    console.log("Successfully synced to GitHub!");
    console.log("Vercel will deploy the latest commit.");
  } catch (error) {
    console.error("\nAuto Sync failed:", error.message);
  } finally {
    isSyncing = false;

    if (pendingSync) {
      pendingSync = false;
      scheduleSync();
    }
  }
}

function scheduleSync() {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    syncToGitHub();
  }, DEBOUNCE_MS);
}

const ignoredDirectories = new Set([
  ".git",
  "node_modules",
  ".next",
  ".vercel",
  "out",
  "build",
  "coverage",
]);

const watcher = chokidar.watch(".", {
  ignored: (filePath) => {
    const normalized = filePath.replace(/\\/g, "/");
    const segments = normalized.split("/");

    if (segments.some((part) => ignoredDirectories.has(part))) {
      return true;
    }

    // Jangan pantau file environment / credentials
    if (/(^|\/)\.env($|\.)/.test(normalized)) {
      return true;
    }

    return false;
  },
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 500,
    pollInterval: 100,
  },
});

watcher.on("all", (event, filePath) => {
  console.log(`[${event}] ${filePath}`);
  scheduleSync();
});

watcher.on("ready", () => {
  console.log("--------------------------------");
  console.log("Portfolio Auto Sync is running");
  console.log("Branch: main");
  console.log("Debounce: 2.5 seconds");
  console.log("Watching for file changes...");
  console.log("--------------------------------");
});

watcher.on("error", (error) => {
  console.error("Watcher error:", error);
});
