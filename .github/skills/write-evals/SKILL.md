---
name: write-evals
description: "Turn content rules into testable eval criteria in content/evals.json and run them. Use in Week 4 when a participant wants to evaluate AI output, write eval criteria, turn anti-patterns into checks, test a string against their rules, or run npm run evals. Covers criterion types, writing specific pass or fail rules, and adding samples."
argument-hint: "Optional: a rule or anti-pattern to turn into a criterion"
---

# Write Evals

Help the participant turn their content system into checks that anyone can apply the same way. The evals live in `content/evals.json` and run with `npm run evals` or in the app under Playground > Eval runner.

## Procedure

1. Read `content/foundations/voice-and-tone.md` (anti-patterns), `grammar-and-style.md`, and `component-patterns.md`.
2. Ask the participant to pick 3 rules they care about. Each anti-pattern is a candidate.
3. For each, help write one criterion using the [criterion types](./references/criterion-types.md). Check it against the quality bar below.
4. Add 2 samples per criterion: one that should pass, and one marked `"expect": "fail"` that proves the criterion catches the problem.
5. Run `npm run evals`. A sample marked `expect: fail` that passes every criterion means the criteria are too weak. Fix the criteria, not the sample.
6. To test one string quickly: `npm run evals -- --text "Save your work" --component button`.
7. Suggest pasting real AI output into the Eval runner in the app, with and without their instructions.

## Quality bar for a criterion

- **Specific:** "Button label is 1 to 3 words" not "Buttons are short"
- **Binary:** it passes or fails, with no judgment call
- **Checkable by someone else:** another person gets the same result
- **Tied to a rule in the content system:** if it is not written there, add it there first

## Rules

- Edit only `content/evals.json`. Keep it valid JSON: commas between items, double quotes only.
- Some rules cannot be checked by a pattern, such as "sounds warm". Say so. Suggest a manual check or a more specific proxy.
- The participant decides what counts as good. Do not add criteria they did not choose.

## Output format

The criterion JSON, one sentence on what it checks, and the sample pair to test it.
