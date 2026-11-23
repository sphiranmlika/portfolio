css = open("scratch_inspect_bg2.py").read()
import urllib.request, re
css_req = urllib.request.Request("https://judiemosinabre.dev/styles.css", headers={"User-Agent": "Mozilla/5.0"})
css_text = urllib.request.urlopen(css_req, timeout=10).read().decode("utf-8")

lines = css_text.splitlines()
for i, l in enumerate(lines):
    if any(k in l for k in ["#about", "#experience", "#works", "#contact", "body"]):
        if "{" in l:
            snippet = "\n".join(lines[i:min(len(lines), i+20)])
            print(f"--- Section at line {i} ---\n{snippet}\n")
