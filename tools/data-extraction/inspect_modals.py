import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

for m in re.finditer(r'<div[^>]*class="[^"]*modal[^"]*"[^>]*>', text):
    print("Found modal class:", m.group(0))

for m in re.finditer(r'<div[^>]*id="[^"]*modal[^"]*"[^>]*>', text, re.IGNORECASE):
    print("Found modal id:", m.group(0))
