import os

files = [f for f in os.listdir("extracted_pdf_images") if f.startswith("Company_Profile")]
print(f"Total Company_Profile images: {len(files)}")
for f in sorted(files):
    print(f)
