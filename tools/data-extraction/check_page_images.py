import os

# Let's inspect the files rendered in pdf_page_images
images = sorted(os.listdir("pdf_page_images"))
print("Total images rendered:", len(images))
for img in images:
    size = os.path.getsize(os.path.join("pdf_page_images", img))
    print(f"- {img}: {size} bytes")
