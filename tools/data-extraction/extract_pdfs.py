import fitz # PyMuPDF
import os
import json

pdf_dir = r"D:\ASRX projects\ACE international"
pdf_files = [
    "Company_Profile.pdf",
    "company catlouge.pdf",
    "Company Profile Blaster & Capsule Filling  Machine Spares.pdf",
    "Die Punch Catalouges.pdf",
    "Catalouges for Capsule Filling Machine.pdf",
    "Customer List.pdf",
    "GST Certificate.pdf"
]

extracted_data = {}

for filename in pdf_files:
    filepath = os.path.join(pdf_dir, filename)
    if not os.path.exists(filepath):
        extracted_data[filename] = {"error": "File not found"}
        continue
    
    try:
        doc = fitz.open(filepath)
        num_pages = len(doc)
        pages_text = []
        for page_num in range(num_pages):
            text = doc[page_num].get_text()
            pages_text.append({
                "page": page_num + 1,
                "text": text.strip()
            })
        extracted_data[filename] = {
            "total_pages": num_pages,
            "pages": pages_text
        }
        print(f"Extracted {filename}: {num_pages} pages")
    except Exception as e:
        extracted_data[filename] = {"error": str(e)}
        print(f"Error extracting {filename}: {e}")

output_path = r"C:\Users\atiqm\.gemini\antigravity-ide\scratch\ace-international\extracted_pdf_data.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(extracted_data, f, indent=2, ensure_ascii=False)

print("Extraction complete. Output written to", output_path)
