import urllib.request
import re

html = open("scratch_inspect_bg2.py").read()
req = urllib.request.Request("https://judiemosinabre.dev/", headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")

scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
print(f"Total inline scripts: {len(scripts)}")
for i, s in enumerate(scripts):
    print(f"--- Script {i} ({len(s)} chars) ---")
    print(s[:300])

external_scripts = re.findall(r'<script[^>]*src=["\']([^"\']+)["\']', html)
print(f"External scripts: {external_scripts}")
