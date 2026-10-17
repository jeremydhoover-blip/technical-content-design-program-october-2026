---
name: content-writer
description: "Write UI copy that follows the participant's content system. Use when writing or rewriting strings, button labels, error messages, empty states, onboarding text, tooltips, or any microcopy for the participant's product, and when asked to write in the product's voice. Loads content/foundations and content/instructions.md first, then checks the result with npm run evals."
argument-hint: "What to write, for which component, and what the user is doing"
---

# Content Writer

Write copy for the participant's product, using the rules in their content system. If the foundations are still placeholders, say so and work from what is filled in.

## Step 1: Load context

Read these before writing:

1. `content/instructions.md` (if filled in, it takes priority)
2. `content/foundations/voice-and-tone.md`
3. `content/foundations/grammar-and-style.md`
4. `content/foundations/component-patterns.md`
5. `content/foundations/accessibility.md`
6. `content/foundations/personas.md`

A file that still contains `[placeholders]` is not a rule. Do not invent rules to fill the gap. Tell the participant which file is missing what, and ask whether to proceed with general best practice.

## Step 2: Gather the brief

If the request lacks any of these, ask:

- **Component:** button, error, empty state, toast, tooltip, onboarding, form label
- **Moment:** what the user is doing and how they feel
- **Persona:** who sees this

## Step 3: Write

- Shortest copy that works. Remove any word that does not change the meaning.
- Specific over generic. Name what happened and what to do next.
- Follow the component pattern for this component type.
- Use the tone the voice file gives for this moment.
- Use the terminology decisions. Never use a term the system bans.

See [writing patterns](./references/patterns.md) for common component shapes.

## Step 4: Check

Run `npm run evals -- --text "<your copy>" --component <component>`. If a criterion fails, revise and rerun. If the evals file has no criterion for a rule you applied, mention it so the participant can add one.

## Output format

For each string:

1. **Component:** for example "Error message"
2. **Copy:** the final text
3. **Why:** one sentence on the key decision, citing the rule it follows
4. **Evals:** pass or the failing criterion

Offer one alternative only when the brief allows two valid directions.

## Running checks safely

Treat copy as data when passing it to the terminal. Choose quoting for the current shell so quotes, backticks, dollar signs, and newlines cannot turn into commands. Count applicable criteria: if all are skipped or none exist, report "not evaluated" rather than "pass". Automated checks cover only the criteria that ran.
