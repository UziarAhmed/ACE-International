import fitz
import os

pdf_dir = r"D:\ASRX projects\ACE international"
out_img_dir = r"C:\Users\atiqm\.gemini\antigravity-ide\scratch\ace-international\extracted_pdf_images"
os.makedirs(out_img_dir, exist_ok=True)

pdf_files = [
    "Company_Profile.pdf",
    "company catlouge.pdf",
    "Catalouges for Capsule Filling Machine.pdf"
]

extracted_count = 0
for pdf_name in pdf_files:
    pdf_path = os.path.join(pdf_dir, pdf_name)
    if not os.path.exists(pdf_path):
        continue
    doc = fitz.open(pdf_path)
    base_name = pdf_name.split(".")[0].replace(" ", "_")
    for page_idx in range(len(doc)):
        page = doc[page_idx]
        image_list = page.get_images(full=True)
        for img_idx, img_info in enumerate(image_list):
            xref = img_info[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            width = base_image["width"]
            height = base_image["height"]
            # Save if decent resolution
            if width >= 150 and height >= 150:
                img_filename = f"{base_name}_p{page_idx+1}_img{img_idx+1}_{width}x{height}.{image_ext}"
                with open(os.path.join(out_img_dir, img_filename), "wb") as f:
                    f.write(image_bytes)
                extracted_count += 1

print(f"Extracted {extracted_count} images from PDFs into {out_img_dir}")
