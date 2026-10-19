# Week 4: Hints

---

## What to include in a good eval

A useful eval criterion is specific, binary (pass or fail), and testable by someone other than the author. Ask yourself: could someone else apply this criterion consistently without asking you what you meant?

Examples of weak criteria:
- "Sounds like the brand" is too vague
- "Is clear" is unmeasurable without a definition of "clear"

Examples of strong criteria:
- "Uses second person ('you'/'your') at least once"
- "Contains no exclamation points"
- "Button label has at most 3 words"
- "Error message includes a resolution path (a next step or action)"
- "Does not use the words 'utilize,' 'leverage,' or 'facilitate'"

Start with your voice-and-tone anti-patterns. Each one is a potential eval criterion.

---

## Writing criteria in evals.json

Each criterion has an `id`, a `description`, and a `type`. The types are `mustMatch`, `mustNotMatch`, `maxWords`, `minWords`, `maxChars`, `bannedWords`, and `sentenceCase`. The examples already in the file show the format. Copy one and change it.

Use `maxWords` for an upper limit and a separate `minWords` criterion for a lower limit. A `maxWords` check alone accepts an empty string.

A deliberately bad sample marked `"expect": "fail"` shows `[miss]` if every criterion passes it. That means your criteria are too weak. Add or sharpen a criterion until it catches the sample.

If `npm run evals` prints "Could not read content/evals.json", the JSON is broken. The usual causes are a missing comma between items, a trailing comma after the last item, or a single quote where a double quote belongs. In patterns, write a backslash twice: `\\b`.

Some rules cannot be checked by a pattern, such as "sounds warm". That is fine. Turn it into a more specific proxy, or keep it as a manual check.

---

## How to structure a final presentation

You have 5 minutes. Suggested structure:

1. **What product did you build for?** (30 seconds) Name it, one sentence on what it does.
2. **Show your content system.** (2 minutes) Open ContentLab and explain one or two decisions in your files.
3. **Show an eval.** (1 minute) Open Evaluations and explain one criterion, a test case, and what its result tells you.
4. **What changed for you?** (1 minute) One concrete thing you understand now that you didn't at the start of Week 1.
5. **What's next?** (30 seconds) One thing you'd do if you kept working on this.

Don't try to show everything. Depth over breadth.

---

## Using your files with your coding assistant

Ask your coding assistant to read `content/instructions.md` and the relevant foundations files, then write a specific piece of copy. Check which files it read. Use a separate chat for a comparison without product context, and explain any limits to that comparison. Similar output is a valid result.

Save generated copy as a sample in `content/evals.json`. Review and save the change, then run `npm run evals`. In the app, open **Evaluations** to view your criteria and expand **Test cases and results**. For a quick check, use **Evaluate your content** at the top of that page. The app reads your file; it does not generate criteria from the foundations files.

Ask your assistant to revise the copy using the failed checks and your feedback. Save and evaluate it again. Do not weaken a rule just to get a passing result.

---

## When CI fails on your PR

Open the failing check and read the last lines. `npm run check` errors name the file and the problem. `npm run evals` failures name the sample and the criterion. `npm run check:strict` also fails on placeholders. Fix locally, commit, and push. The PR updates.

If no checks appear at all, open the **Actions** tab on your fork and click **Enable workflows**.
