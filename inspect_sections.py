with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if '<section' in line:
        print(f"Line {i+1}: {line.strip()[:80]}")
