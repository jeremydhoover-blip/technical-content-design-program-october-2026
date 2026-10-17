---
description: "Generate test copy with and without my instructions, then run the evals on both. Use in Week 3 and 4."
agent: agent
tools: ['runCommands', 'search']
---

Help me test whether my content system changes AI output.

Request to test: `${input:request:For example: Write an error message for a failed file upload}`
Component: `${input:component:button, error, empty-state, onboarding, toast}`

1. Read `content/instructions.md` and the files in `content/foundations/`.
2. Write the copy twice. Version A: ignore my content system and write it as a generic assistant would. Version B: follow my instructions and foundations exactly.
3. Run `npm run evals -- --text "<copy>" --component <component>` on each version.
4. Show both versions and the eval results side by side.
5. In 3 sentences, say what the content system changed and which rule had the most effect. If both versions look the same, say which rule is too weak to matter.
