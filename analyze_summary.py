import json

with open("extracted_pdf_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

summary = {}

for filename, content in data.items():
    if "error" in content:
        summary[filename] = content
        continue
    pages_text = [f"--- PAGE {p['page']} ---\n" + p['text'] for p in content["pages"]]
    full_text = "\n".join(pages_text)
    summary[filename] = {
        "total_pages": content["total_pages"],
        "snippet": full_text[:4000] # First 4000 chars
    }
    # Write full text to text files for easy inspection
    clean_name = filename.replace(" ", "_").replace("&", "and") + ".txt"
    with open(f"extracted_{clean_name}", "w", encoding="utf-8") as out_f:
        out_f.write(full_text)

print("Generated full text files for each document.")
