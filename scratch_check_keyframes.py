import urllib.request
import re

css_url = "https://judiemosinabre.dev/styles.css"
req = urllib.request.Request(css_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as cr:
    css = cr.read().decode('utf-8', errors='ignore')

for m in re.finditer(r'@keyframes\s+fadeInOut\s*\{[^}]+\}', css):
    print("Keyframes fadeInOut:\n", m.group(0))
