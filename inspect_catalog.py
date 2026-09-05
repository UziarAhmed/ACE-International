import json

log_path = r"C:\Users\atiqm\.gemini\antigravity-ide\brain\ca9e9dc0-4320-46e2-acde-6091ee28d2a6\.system_generated\logs\transcript_full.jsonl"
with open(log_path, "r", encoding="utf-8", errors="ignore") as f:
    for line in f:
        if 'ace-iv-rotary-tablet-press.jpg' in line and 'product' in line:
            obj = json.loads(line)
            print("Step:", obj.get("step_index"))
            for tc in obj.get("tool_calls", []):
                args = tc.get("args", {})
                for k, v in args.items():
                    if 'ace-iv-rotary-tablet-press.jpg' in str(v):
                        print(f"--- Key: {k} in {tc.get('name')} ---")
                        print(str(v)[:1500])
