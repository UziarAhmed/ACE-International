import json

log_path = r"C:\Users\atiqm\.gemini\antigravity-ide\brain\ca9e9dc0-4320-46e2-acde-6091ee28d2a6\.system_generated\logs\transcript_full.jsonl"
with open(log_path, "r", encoding="utf-8", errors="ignore") as f:
    for line in f:
        if '"step_index":962' in line or '"step_index":961' in line:
            obj = json.loads(line)
            print("Step:", obj.get("step_index"))
            for k, v in obj.items():
                if k != "content":
                    print(k, str(v)[:200])
                else:
                    print("content:", str(v)[:400])
