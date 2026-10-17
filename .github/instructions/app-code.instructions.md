---
applyTo: "{src/**,scripts/**,index.html,vite.config.js,package.json}"
---

# Instructions for app code

The app code belongs to engineering. Participants are content designers.

## Rules

- Do not change app logic unless the participant explicitly asks.
- If a participant wants copy changed, edit `src/strings.json` values, not the code.
- Shared logic is in `src/lib/` and runs in both the browser and Node. Keep it free of DOM and Node APIs.
- Scripts in `scripts/` print plain output with `[ok]`, `[warn]`, `[fail]` prefixes. Keep that format.
- Explain code in plain language. Do not assume the participant reads JavaScript.

## Helping a participant read the code

Use this order: what the file is for, what it reads, what it shows on screen. Then point to the line where content meets code, which is where a key from `strings.json` is used.
