---
applyTo: "src/strings.json"
---

# Instructions for src/strings.json

This file holds all UI copy for the app. Content owns the values. Engineering owns the keys.

## The most important rule

Never rename, delete, or move a key. The app reads keys in `src/main.js` and `index.html` (`data-string="group.key"`). A change breaks the app. Only values are safe to change.

## Conventions

- Keys are camelCase and describe the element, not the content: `statusLabel`, not `systemActiveText`
- Keys are grouped by view or component: `dashboard`, `contentlab`, `playground`, `toasts`
- One string per key

## Voice

- Active voice, second person
- Verb-first labels: "Open ContentLab", not "ContentLab access"
- No filler: simply, just, easily, please
- Specific over abstract
- Professional and direct

## Before suggesting a change

1. Confirm it changes a value, not a key
2. Confirm the value is not empty
3. Confirm no leading or trailing whitespace
4. Run `npm run check` after the edit
