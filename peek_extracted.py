import glob

files = glob.glob("extracted_*.txt")
for f in files:
    print(f"===================== {f} =====================")
    with open(f, "r", encoding="utf-8") as fp:
        lines = [line.strip() for line in fp.readlines() if line.strip()]
        # Print first 40 lines
        for l in lines[:35]:
            print(l)
        print("...\n")
