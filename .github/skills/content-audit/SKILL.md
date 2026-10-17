---
name: content-audit
description: "Audit a participant's content system for gaps. Use when a participant asks what is missing, whether their files are ready, what to improve next, or before opening a PR or presenting. Runs npm run check, reads content/foundations and content/instructions.md, and reports placeholders, vague rules, missing examples, and inconsistencies."
argument-hint: "Optional: a file to focus on, such as personas"
---

# Content Audit

Find what is weak or missing in the participant's content system. Report. Do not rewrite their files.

## Procedure

1. Run `npm run check`. Note every warning and error. Use `npm run check:strict` only when the participant says they are ready for the final PR.
2. Read the files in `content/foundations/` and `content/instructions.md`. If a file is still mostly placeholders, say so and stop auditing that file. Do not treat placeholder text as a finished rule.
3. For each finished section, apply the [audit criteria](./references/criteria.md).
4. Compare against the worked example in `content/examples/luma/` only to judge depth. Never copy its wording into the participant's file.
5. Report using the format below. Rank issues by how much they would change AI output.

## Rules

- Do not edit the participant's files. Suggest, and let them write.
- Praise only what is specific. "Good voice attributes" is not feedback. "Attribute 2 names an extreme to avoid, which makes it testable" is.
- Limit the report to the 5 most useful findings.

## Output format

**Status:** one line (for example "3 of 6 files complete")

**Top findings:** numbered, each with
- File and section
- What is weak or missing
- One concrete suggestion for how to fix it

**Next step:** the single most valuable edit to make now
