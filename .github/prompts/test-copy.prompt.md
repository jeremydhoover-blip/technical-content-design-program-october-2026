---
description: "Generate test copy with and without my instructions, then run the evals on both. Use in Week 3 and 4."
agent: agent
tools: ['search', 'read', 'execute/runInTerminal']
---

Help me test whether my content system changes AI output.

Request to test: `${input:request:For example: Write an error message for a failed file upload}`
Component: `${input:component:button, error, empty-state, onboarding, toast}`

1. Read `content/instructions.md` and the files in `content/foundations/`.
2. For a quick illustration, write a generic Version A and a rules-based Version B. Label this a same-chat comparison: you have already read the rules, so Version A is not an independent baseline. For a stronger test, ask the participant to generate Version A in a separate chat without attaching the product files or enabling product-specific instructions, then paste it here.
3. Run `npm run evals -- --text "<copy>" --component <component>` on each version.
4. Show both versions and the eval results side by side.
5. In 3 sentences, say what the content system changed and which rule had the most effect. If both versions look the same, report that result. One example does not prove that a rule is weak or that the system has no effect.
