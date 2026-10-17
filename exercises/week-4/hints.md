# Week 4: Hints

---

## What to include in a good eval

A useful eval criterion is specific, binary (pass/fail or scoreable), and testable by someone other than the author. Ask yourself: could someone else apply this criterion consistently without asking you what you meant?

Examples of weak criteria:
- "Sounds like the brand" is too vague
- "Is clear" is unmeasurable without a definition of "clear"

Examples of strong criteria:
- "Uses second person ('you'/'your') at least once"
- "Contains no exclamation points"
- "Button label is 1–3 words"
- "Error message includes a resolution path (a next step or action)"
- "Does not use the words 'utilize,' 'leverage,' or 'facilitate'"

Start with your voice-and-tone anti-patterns. Each one is a potential eval criterion.

---

## Writing criteria in evals.json

Each criterion has an `id`, a `description`, and a `type`. The types are `mustMatch`, `mustNotMatch`, `maxWords`, `minWords`, `maxChars`, `bannedWords`, and `sentenceCase`. The examples already in the file show the format. Copy one and change it.

A deliberately bad sample marked `"expect": "fail"` shows `[miss]` if every criterion passes it. That means your criteria are too weak. Add or sharpen a criterion until it catches the sample.

If `npm run evals` prints "Could not read content/evals.json", the JSON is broken. The usual causes are a missing comma between items, a trailing comma after the last item, or a single quote where a double quote belongs. In patterns, write a backslash twice: `\\b`.

Some rules cannot be checked by a pattern, such as "sounds warm". That is fine. Turn it into a more specific proxy, or keep it as a manual check.

---

## How to structure a final presentation

You have 5 minutes. Suggested structure:

1. **What product did you build for?** (30 seconds) Name it, one sentence on what it does.
2. **Show your content system.** (2 minutes) Walk through 2–3 of your `content/foundations/` files. Point to one thing you're proud of in each.
3. **What changed for you?** (1 minute) One concrete thing you understand now that you didn't at the start of Week 1.
4. **What's next?** (30 seconds) One thing you'd do if you kept working on this.

Don't try to show everything. Depth over breadth.

---

## Connecting your system files to an AI tool workflow

If you built a `content/instructions.md` file in Week 3, show how it works. Paste it as a system prompt in an AI assistant, ask it to write a specific piece of copy for your product, and show the output.

Then show what happens without the context. The contrast is the point.

If you're using GitHub Copilot in VS Code, remember that Copilot reads `.github/copilot-instructions.md` automatically, and that file now has a line pointing to your `content/instructions.md`. Ask it to write a button label or error message for your product and see whether it follows your rules without you prompting it explicitly. Then run the result through the Eval runner in the Playground.

---

## When CI fails on your PR

Open the failing check and read the last lines. `npm run check` errors name the file and the problem. `npm run evals` failures name the sample and the criterion. `npm run check:strict` also fails on placeholders. Fix locally, commit, and push. The PR updates.

If no checks appear at all, open the **Actions** tab on your fork and click **Enable workflows**.
