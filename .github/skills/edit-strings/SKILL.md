---
name: edit-strings
description: "Safely change UI copy in src/strings.json. Use when a participant wants to change text in the app, find where a string is used, understand how content is separated from code, or complete the strings exercise. Never renames keys. Runs npm run check after each change."
argument-hint: "Optional: the text you want to change"
---

# Edit Strings

`src/strings.json` holds all UI copy for the app. Keys are the names the code uses. Values are what users see. Only values are safe to change.

## Procedure

1. Find the string. Search `src/strings.json` for the text the participant sees in the app. Show them the key path, for example `dashboard.heading`.
2. Show where the code uses it: search `src/main.js` and `index.html` for the key (`strings.dashboard.heading` or `data-string="dashboard.heading"`). This is the moment where content and code meet. Explain it in one sentence.
3. Help the participant write the new value. Check it against `content/foundations/voice-and-tone.md` and `grammar-and-style.md` if those are filled in. Otherwise use the voice rules in `.github/instructions/strings.instructions.md`.
4. Edit only the value. Keep the quotes, the colon, and the comma.
5. Run `npm run check`. It reports invalid JSON, empty values, stray whitespace, and any key the code expects that is missing.
6. Ask the participant to look at the app. It reloads when they save.

## Rules

- **Never rename, delete, or restructure a key.** The app breaks with no warning.
- Keep values non-empty with no leading or trailing spaces.
- Do not add a key unless the participant is also adding the code that uses it. If they are, say that engineering owns that part.
- If JSON breaks, the usual causes are a missing comma, a missing quote, or an unescaped double quote inside a value. Check those first.

## Output format

The key path, the old value, the new value, and the result of `npm run check`.
