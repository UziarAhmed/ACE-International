import json
import re

with open("extracted_pdf_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

report = []
report.append("# Comprehensive Information Extraction: ACE INTERNATIONAL\n")

for filename, content in data.items():
    report.append(f"\n## Document: {filename}")
    report.append(f"- **Total Pages**: {content.get('total_pages', 0)}")
    
    pages = content.get("pages", [])
    all_text = "\n".join([p["text"] for p in pages])
    
    # Extract emails, phones, addresses, models, tables
    emails = set(re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', all_text))
    phones = set(re.findall(r'(?:\+?\d{1,3}[-.\s]?)?\(?\d{2,5}\)?[-.\s]?\d{3,5}[-.\s]?\d{3,5}', all_text))
    urls = set(re.findall(r'https?://[^\s]+|www\.[^\s]+', all_text))
    
    report.append(f"- **Found Emails**: {', '.join(emails) if emails else 'None'}")
    report.append(f"- **Found Phones**: {', '.join(list(phones)[:8]) if phones else 'None'}")
    report.append(f"- **Found Websites**: {', '.join(urls) if urls else 'None'}")
    
    report.append("\n### Key Extracted Content / Sections:")
    for p in pages:
        txt = p['text'].strip()
        if not txt:
            continue
        # Summarize or list page lines
        lines = [line.strip() for line in txt.split("\n") if line.strip()]
        if len(lines) > 0:
            report.append(f"\n#### Page {p['page']}")
            for line in lines[:20]: # First 20 lines of page
                report.append(f"- {line}")
            if len(lines) > 20:
                report.append(f"- *... ({len(lines)-20} more lines)*")

with open("ace_extracted_profile.md", "w", encoding="utf-8") as f:
    f.write("\n".join(report))

print("Report generated: ace_extracted_profile.md")
