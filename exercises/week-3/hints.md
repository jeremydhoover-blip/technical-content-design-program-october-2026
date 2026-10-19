# Week 3: Hints

## When your assistant ignores a rule

First, check that it read the right files. Name `content/instructions.md` and the relevant foundations files in your request. Inspect its file references or reading activity.

Then check the rule itself. Replace vague instructions such as "Be friendly" with wording someone can assess. Resolve conflicts between files. Put important rules where a reader can find them quickly.

Change one rule at a time and compare several responses. A single response does not prove that a rule works reliably.

---

## Comparing responses

Use the same writing request in separate chats, with and without the product files. A new chat inside your repo can still receive repo instructions. Check the context each chat used and record any limits to the comparison.

If the responses match, report that result. Check whether the first response already met the rule, whether both chats read the same files, or whether the request gave the rule a chance to matter. Different wording alone does not prove better copy.

---

## Inspecting context

Run `npm run prompt` to see assembled instructions and foundations text with an estimated token count. You can also expand **Optional: inspect assembled context** at the bottom of **Exercises > Week 3 > Task**.

This demonstration helps you see what the files contribute. You do not need to copy the assembled text when your assistant can read the files directly. Token counts are estimates, not a measurement of the full chat or your tool's available context.

---

## Using skills and instructions

Clients discover instructions and skills differently. If your assistant does not load a skill, ask it to read the relevant `.github/skills/<name>/SKILL.md` file. Check what it actually reads and runs.

In supported Copilot sessions, `.github/copilot-instructions.md` provides repo guidance when enabled. A line pointing to your product files asks Copilot to read them; it does not prove those files were read. Other assistants can use a direct request to read the same files.

---

## Keeping your comparison

Ask your assistant to add the copy to `samples` in `content/evals.json`. Give each sample a unique `id`, the correct `component`, and its `text`. Review and save the file, then run `npm run evals` or expand **Test cases and results** in Evaluations.

The starter criteria cover only their example rules. A result tells you how the copy performed on those checks, not whether it follows every rule in your foundations files. Mark `"expect": "fail"` only when you deliberately expect a test case to fail at least one applicable check.
