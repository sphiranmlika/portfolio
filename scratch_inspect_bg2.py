import urllib.request
import re

base_url = "https://judiemosinabre.dev/"
req = urllib.request.Request(base_url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")

# Extract Hero section HTML
hero_match = re.search(r'<section[^>]*id=["\']home["\'][^>]*>(.*?)</section>', html, re.DOTALL | re.IGNORECASE)
if hero_match:
    print("=== HERO HTML ===")
    print(hero_match.group(0)[:2500])
else:
    print("Hero not found by regex")

# Fetch styles.css
css_req = urllib.request.Request("https://judiemosinabre.dev/styles.css", headers={"User-Agent": "Mozilla/5.0"})
css_text = urllib.request.urlopen(css_req, timeout=10).read().decode("utf-8")

lines = css_text.splitlines()
print("\n=== STYLES.CSS LINES 170 to 320 ===")
print("\n".join(lines[170:320]))

# Search for any canvas or background animation keyframes
print("\n=== KEYFRAMES IN STYLES.CSS ===")
for i, l in enumerate(lines):
    if "@keyframes" in l:
        print("\n".join(lines[i:i+30]))
