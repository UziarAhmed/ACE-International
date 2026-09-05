import fitz
import os

pdf_dir = r"D:\ASRX projects\ACE international"
files_to_check = [
    "Die Punch Catalouges.pdf",
    "Company Profile Blaster & Capsule Filling  Machine Spares.pdf"
]

for fname in files_to_check:
    path = os.path.join(pdf_dir, fname)
    doc = fitz.open(path)
    print(f"=== {fname} (Pages: {len(doc)}) ===")
    for i, page in enumerate(doc):
        text = page.get_text().strip()
        images = page.get_images()
        print(f"Page {i+1}: Text length = {len(text)}, Images count = {len(images)}")
        if text:
            print(f"Sample text page {i+1}: {text[:200]}")
