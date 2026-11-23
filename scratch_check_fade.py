import re

with open("scratch_ref.html", "r", encoding="utf-8") as f:
    html = f.read()

inline_scripts = re.findall(r'<script(?![^>]*src)[^>]*>(.*?)</script>', html, re.DOTALL)
for s in inline_scripts:
    if 'job-titles' in s or 'positions' in s:
        print("=== INLINE SCRIPT FOR JOB TITLES ===")
        print(s)

# Also check CSS for .fade
with open("scratch_ref.css", "r", encoding="utf-8") as f:
    css = f.read()

print("=== CSS FOR .fade or #job-titles ===")
for m in re.finditer(r'([^{}]*(?:\.fade|job-titles)[^{}]*\{[^}]+\})', css):
    print(m.group(0))
