import urllib.request
import re
from urllib.parse import urljoin

base_url = "https://judiemosinabre.dev/"
req = urllib.request.Request(base_url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")

print("=== BODY / HERO TAGS ===")
for line in html.splitlines():
    if any(k in line.lower() for k in ["<body", "<section", "id=\"hero\"", "class=\"hero\"", "<canvas", "gradient", "background", "glow"]):
        print(line[:200])

css_matches = re.findall(r'href=["\']([^"\']+\.css[^"\']*)["\']', html)
print("\n=== CSS FILES ===", css_matches)

for css_rel in css_matches:
    css_url = urljoin(base_url, css_rel)
    print(f"\n--- Fetching {css_url} ---")
    try:
        css_req = urllib.request.Request(css_url, headers={"User-Agent": "Mozilla/5.0"})
        css_text = urllib.request.urlopen(css_req, timeout=10).read().decode("utf-8")
        
        # Search for body, html, hero, background, glow, radial, ambient, animation
        lines = css_text.splitlines()
        print(f"Total lines: {len(lines)}")
        for i, l in enumerate(lines):
            if any(k in l.lower() for k in ["background", "radial-gradient", "linear-gradient", "filter: blur", "@keyframes", "glow", "canvas"]):
                snippet = "\n".join(lines[max(0, i-2):min(len(lines), i+8)])
                print(f"[Match around line {i}]:\n{snippet}\n")
    except Exception as e:
        print(f"Failed to fetch {css_url}: {e}")
