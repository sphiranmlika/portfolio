import urllib.request
import re

url = "https://judiemosinabre.dev/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')

    scripts = re.findall(r'<script[^>]*src=["\']([^"\']+)["\']', html)
    print("Script tags:", scripts)

    inline_scripts = re.findall(r'<script(?![^>]*src)[^>]*>(.*?)</script>', html, re.DOTALL)
    print(f"Found {len(inline_scripts)} inline scripts")
    for s in inline_scripts:
        if 'job-titles' in s or 'Engineer' in s or 'titles' in s:
            print("Inline match:\n", s[:500])

    for s_src in scripts:
        s_url = "https://judiemosinabre.dev/" + s_src.lstrip("./")
        try:
            s_req = urllib.request.Request(s_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(s_req) as s_resp:
                js = s_resp.read().decode('utf-8', errors='ignore')
            print(f"Checking {s_src} (length {len(js)})...")
            if 'job-titles' in js or 'titles' in js or 'jobTitle' in js:
                print(f"Found match in {s_src}:")
                for line in js.split("\n"):
                    if any(k in line for k in ['job-titles', 'titles', 'jobTitle', 'Engineer']):
                        print("  Line:", line[:200])
        except Exception as e:
            print(f"Error fetching {s_src}: {e}")

    # Also check styles.css for job-titles / hero-subheading
    css_url = "https://judiemosinabre.dev/styles.css"
    css_req = urllib.request.Request(css_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(css_req) as cr:
        css = cr.read().decode('utf-8', errors='ignore')
    print("\nCSS rules for hero-subheading or job-titles:")
    for m in re.finditer(r'(hero-subheading|job-titles|fadeInUp)[^{]*\{[^}]+\}', css):
        print(m.group(0))

except Exception as e:
    print("Error:", e)
