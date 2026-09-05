import json

log_path = r"C:\Users\atiqm\.gemini\antigravity-ide\brain\ca9e9dc0-4320-46e2-acde-6091ee28d2a6\.system_generated\logs\transcript_full.jsonl"
with open(log_path, "r", encoding="utf-8", errors="ignore") as f:
    for line in f:
        if '"step_index":293' in line:
            obj = json.loads(line)
            for tc in obj.get("tool_calls", []):
                args = tc.get("args", {})
                for k, v in args.items():
                    if "catCarouselPrev" in str(v) or "categoryCarouselTrack" in str(v):
                        with open("carousel_js_recovered.js", "w", encoding="utf-8") as out:
                            out.write(str(v))
                        print("Saved to carousel_js_recovered.js! Size:", len(str(v)))
