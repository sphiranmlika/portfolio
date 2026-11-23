import urllib.request
req = urllib.request.Request("https://judiemosinabre.dev/main.js", headers={"User-Agent": "Mozilla/5.0"})
try:
    js_text = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
    print("=== MAIN.JS (first 1500 chars) ===")
    print(js_text[:1500])
except Exception as e:
    print("Error fetching main.js:", e)
