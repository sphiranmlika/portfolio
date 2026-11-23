import urllib.request
import re

url = "https://judiemosinabre.dev/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

inline_scripts = re.findall(r'<script(?![^>]*src)[^>]*>(.*?)</script>', html, re.DOTALL)
for s in inline_scripts:
    if 'job-titles' in s or 'positions' in s:
        print("=== INLINE SCRIPT FOR JOB TITLES ===")
        print(s)

css_url = "https://judiemosinabre.dev/styles.css"
css_req = urllib.request.Request(css_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(css_req) as cr:
    css = cr.read().decode('utf-8', errors='ignore')

print("=== CSS FOR .fade or #job-titles ===")
for m in re.finditer(r'([^{}]*(?:\.fade|job-titles)[^{}]*\{[^}]+\})', css):
    print(m.group(0))
