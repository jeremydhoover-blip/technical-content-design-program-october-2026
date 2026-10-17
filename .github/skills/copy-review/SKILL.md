---
name: copy-review
description: "Review copy against the participant's own content system and return pass or fail with fixes. Use when a participant asks for feedback on a string, wants to check AI-generated copy, asks whether something matches their voice, or wants a second opinion before committing. Runs npm run evals for the measurable rules and judges voice by reading the foundations."
argument-hint: "Paste the copy and say which component it is for"
---

# Copy Review

Review copy against the participant's rules, not generic style opinions.

## Procedure

1. Identify the copy and its component. If the component is unclear, ask.
2. Run the measurable checks: `npm run evals -- --text "<copy>" --component <component>`. Report each failing criterion exactly as printed.
3. Read `content/foundations/voice-and-tone.md`, `grammar-and-style.md`, and `component-patterns.md`. Skip a file that is still placeholders and say so.
4. Judge what the evals cannot check using the [review dimensions](./references/dimensions.md). For each, give pass or needs work with one sentence of evidence from the copy.
5. End with a verdict:
   - **Ready:** all checks pass
   - **Minor revision:** 1 or 2 small issues, with a specific fix for each
   - **Rewrite:** name the core problem in one sentence, then show one rewritten version

## Rules

- Cite the rule. "Violates the sentence case rule in grammar-and-style.md" beats "feels off".
- If the copy breaks a rule that is not written anywhere in the participant's system, say so. The system has a gap. Suggest adding the rule.
- If the participant's rules conflict with each other, flag the conflict instead of picking a side.
- Do not rewrite unless the verdict is Rewrite or the participant asks.
- Review the copy. Do not comment on the participant.

## Output format

1. **Evals:** pass, or the failing criteria
2. **Judgment:** one line per dimension
3. **Verdict:** Ready, Minor revision, or Rewrite
4. **Fix:** only when needed
