# Week 3: Hints

---

## When AI ignores your instructions

If the AI isn't following your voice guidelines, it's usually one of these:

1. **The instruction is too vague.** "Be friendly" doesn't help. "Don't use exclamation points. Use second person. Keep labels under 4 words." does.
2. **The instruction is buried.** Put the most important rules at the top of your system prompt. Models weight earlier context more heavily.
3. **There's a conflict.** If your prompt says "be concise" and also asks for detailed explanations, the model will make a judgment call. Resolve the conflict explicitly.

Try adding one specific rule at a time and testing the output after each change. That way you'll know which rule is doing the work.

---

## Testing whether a system prompt is working

Don't just ask for one output and call it done. Test your prompt with:
- A case where the rule clearly applies (e.g., an error message)
- A case where you'd expect it to be borderline (e.g., a confirmation dialog)
- A case where you'd expect it to fail without the rule (e.g., onboarding copy that might get too enthusiastic)

If the output looks the same with and without your rule, the rule isn't landing. Rewrite it to be more specific.

---

## Token limits in practical terms

A typical content system file (500–800 words) is roughly 700–1,000 tokens. Most current models can handle well over 100,000 tokens in a single context, so your five `content/foundations/` files together are well within range.

Where limits matter: if you're building an automated system that runs prompts at scale, token cost is real. Writing efficient, well-structured content files that say exactly what's needed (no filler) is good practice regardless.

---

## How Copilot finds your instructions

GitHub Copilot in VS Code reads `.github/copilot-instructions.md` automatically on every request in your repo. It does not read `content/instructions.md` by itself. You connect them by adding a line to `.github/copilot-instructions.md` that points to your file, such as: "When writing copy for [your product], follow `content/instructions.md` and the files in `content/foundations/`."

You can also attach `content/instructions.md` to a single chat with `#file`.

If Copilot seems to ignore your rules, ask it: "Which instructions files did you use for that answer?" Its references list shows what it read.
