---
applyTo: "content/evals.json"
---

# Instructions for content/evals.json

This file holds the participant's eval criteria and samples. `npm run evals` and the app's Eval runner both read it.

## Format

- Valid JSON: double quotes, commas between items, no trailing commas, no comments
- `criteria`: each has `id`, `description`, `type`, and the fields that type needs
- Types: `mustMatch`, `mustNotMatch`, `maxWords`, `minWords`, `maxChars`, `bannedWords`, `sentenceCase`
- `samples`: each has `id`, `component`, `text`. A deliberately bad sample adds `"expect": "fail"`
- In `pattern` values a backslash is written twice: `\\b`

## What a good criterion is

- Specific and binary: it passes or fails with no judgment call
- Tied to a rule written in the participant's content system
- Checkable by someone else with the same result

## You must not

- Add criteria the participant did not choose
- Weaken a criterion to make a sample pass. Fix the sample or the rule
- Remove a participant's criterion without asking

After any edit, run `npm run evals`.
