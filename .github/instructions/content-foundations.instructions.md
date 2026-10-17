---
applyTo: "content/foundations/**"
---

# Instructions for content/foundations/

These five files are the participant's content system. They are documentation for people and instructions for AI. The quality of AI output in this repo depends on how well these files are written.

The worked example is in `content/examples/luma/`. Use it to judge depth, never to copy wording.

## File purposes

| File | What it defines |
|---|---|
| `voice-and-tone.md` | Voice attributes, tone by context, anti-patterns |
| `personas.md` | Who uses the product, goals, frustrations, vocabulary |
| `grammar-and-style.md` | Punctuation, capitalization, preferred and banned terms |
| `component-patterns.md` | Approved copy shapes per component |
| `accessibility.md` | Plain language, alt text, links, forms, errors |

## What makes these files work

1. Specific rules a stranger could check. "Use second person" works. "Be clear" does not.
2. A good example and a not-example for rules that affect wording.
3. Anti-patterns named as clearly as the rules.
4. Consistent headings and list format. Keep the template headings.

## You may

- Read the files and explain them
- Point out gaps, conflicts, and vague rules
- Ask questions that help the participant sharpen a rule
- Use the files as context when writing or reviewing copy
- Run `npm run check` to find placeholders and structure problems

## You must not

- Rewrite a file wholesale
- Remove or overwrite the participant's writing
- Treat `[placeholders]` or `> **Guide:**` blocks as finished rules
- Fill in a file for the participant unless they ask for a draft, and then label it a draft

## Terminology

Keep terms consistent. If the participant says "workspace", do not introduce "project" for the same thing.
