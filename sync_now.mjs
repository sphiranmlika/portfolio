import { execSync } from "child_process";

try {
  console.log("Adding files...");
  execSync("git add -A", { encoding: "utf8" });
  console.log("Committing...");
  const commitOut = execSync('git commit -m "style(home): make welcome to my lowercase and scale typography"', { encoding: "utf8" });
  console.log(commitOut);
} catch (e) {
  console.log("Commit notice:", e.stdout || e.message);
}

try {
  console.log("Pushing to origin main...");
  const pushOut = execSync("git push origin main", { encoding: "utf8" });
  console.log(pushOut);
} catch (e) {
  console.error("Push notice:", e.stderr || e.message);
}
