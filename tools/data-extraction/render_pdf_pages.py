import fitz
import os

pdf_dir = r"D:\ASRX projects\ACE international"
out_dir = r"C:\Users\atiqm\.gemini\antigravity-ide\scratch\ace-international\pdf_page_images"
os.makedirs(out_dir, exist_ok=True)

# Render pages of Die Punch Catalouges.pdf
doc_punch = fitz.open(os.path.join(pdf_dir, "Die Punch Catalouges.pdf"))
for i in range(len(doc_punch)):
    page = doc_punch[i]
    pix = page.get_pixmap(dpi=150)
    pix.save(os.path.join(out_dir, f"die_punch_page_{i+1}.png"))
print(f"Rendered {len(doc_punch)} pages of Die Punch Catalouges.pdf")

# Render pages of Company Profile Blaster & Capsule Filling Machine Spares.pdf
doc_spares = fitz.open(os.path.join(pdf_dir, "Company Profile Blaster & Capsule Filling  Machine Spares.pdf"))
for i in range(len(doc_spares)):
    page = doc_spares[i]
    pix = page.get_pixmap(dpi=150)
    pix.save(os.path.join(out_dir, f"blister_capsule_spares_page_{i+1}.png"))
print(f"Rendered {len(doc_spares)} pages of Company Profile Blaster & Capsule Filling Machine Spares.pdf")
