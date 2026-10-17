---
name: build-system-prompt
description: "Help write content/instructions.md, the system prompt for the participant's product. Use in Week 3 when a participant wants to turn their content system into AI instructions, asks how to write a system prompt, wants to check token size, or asks how to connect Copilot to their rules. Runs npm run prompt to measure and preview the assembled context."
argument-hint: "Optional: what the participant has written so far"
---

# Build System Prompt

Coach the participant through writing `content/instructions.md`. The participant writes it. You review and sharpen.

## When to use

- Week 3 after-session task
- "How do I make Copilot follow my rules?"
- "Is my prompt too long?"

## Procedure

1. Ask which of the five foundations files are complete. If fewer than three, recommend finishing them first, because instructions point to them.
2. Run `npm run prompt` to preview the assembled context and read the token estimate printed at the end. Foundations that are complete are typically 3,000 to 6,000 tokens in total.
3. Walk the participant through the sections of `content/instructions.md`: what the product is, who the users are, voice, rules, never, how to use the content system, output format.
4. When the participant has written a section, review it against the [prompt quality checklist](./references/checklist.md). Point out vague rules and conflicts. Suggest rewrites as options, not replacements.
5. Draft text for a section only if the participant asks for a draft. Label it "Draft for you to revise".
6. Once `content/instructions.md` is done, explain the two ways to apply it:
   - In chat: attach it and the foundations files as context
   - Repo instruction: add one line to `.github/copilot-instructions.md` pointing at `content/instructions.md`. See `docs/AI-TOOLING.md`.
7. Compare the same request in separate chats, with and without the product files and product-specific instructions. A generic and guided answer in one chat is an illustration, not an independent baseline. Check which files were actually referenced.

## Rules

- Keep the finished instructions under 300 words. They point to the foundations files for detail.
- Put the most important rules first.
- Do not invent product facts. If the participant has not defined something, ask.

## Output format

Short review notes: what is strong, the 2 most important fixes, and the next step.
