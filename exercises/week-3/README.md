# Week 3: AI as a Technical Collaborator

You have a content system. This week you're going to use it.

---

## In session

Use your chosen coding environment for edits and AI work. The app displays the files you save. Copilot commands in this card are optional examples; if your assistant does not support them, give it the same task and the relevant files directly.

### 1. Context windows and tokens

Language models have a limited amount of text they can read and process at one time. That limit is measured in **tokens**: roughly three to four characters per token, or about 75% of a word.

What this means for content designers: you can't just dump everything into a prompt and expect perfect results. You have to be deliberate about what context you provide. A well-structured content system file is easy to include. An unstructured one wastes tokens and produces worse output.

See the size of your own context. Run:

```bash
npm run prompt
```

It assembles your instructions and foundations files and prints an estimated token count. This is a context demonstration, not a required prompt to copy into your assistant. You can also open the optional context demonstration in **Exercises > Week 3** in the app, switch files on and off, and watch the size change.

### 2. Writing instructions that work

There's a difference between asking an AI assistant to "write a button label" and giving it a system prompt that includes your voice attributes, your persona, and your component patterns for buttons.

In session, you'll compare responses to the same request:
- A response without your product files or instructions
- A response with your `content/foundations/` files as context

Use a separate chat for each response and check which files and instructions the assistant used. A new chat inside your repo can still include your product files. If both chats include those files, say so when you discuss the results.

Check both responses against your written rules. Note what changed, what stayed the same, and which rules the assistant missed. If the responses match, explain what you found.

### 3. What "agentic" means

An agentic AI system doesn't just respond to a prompt. It takes a sequence of actions toward a goal. It might read a file, generate content, check it against rules, and write the result back.

This repo already has some. The `copy-review` skill reads your files, runs `npm run evals` on a string, and reports. The `content-audit` skill reads your files and finds gaps. Open `.github/skills/copy-review/SKILL.md` and read how it is written. It is a plain markdown file. It is also a set of instructions for an agent.

For content designers, this matters because: the systems being built around these models read your files. If your files are well-structured and your rules are clear, the system can use them. If they're vague, the system fills in gaps on its own, and you lose control of the output.

### 4. Giving the AI your files as context

Your coding assistant can read the content files directly. Point it to `content/instructions.md` and the relevant foundations files, then check which files it read. Your instructor demos this in a coding environment.

Copilot offers these options when supported by your client:

1. **Attach files.** In Copilot Chat, type `#file` and pick `content/instructions.md` and your foundations files. This works for one conversation.
2. **Add an instructions file.** `.github/copilot-instructions.md` provides repo instructions in supported Copilot sessions when enabled. Add a line asking Copilot to read your product files when writing copy, then check the response references to confirm which files it used.
3. **Use a skill.** The `content-writer` skill loads your files and writes copy with them.

A fourth way exists for larger systems: **MCP** (Model Context Protocol), a standard that lets AI tools connect to outside data and services. You won't build one in this program. The idea is the same as what you just did. Give the AI structured context from outside the chat.

This is why structure mattered in Week 2. Your files are now AI infrastructure.

See [docs/AI-TOOLING.md](../../docs/AI-TOOLING.md) for the full list of what this repo provides.

### 5. Demo: your voice-and-tone file in action

Watch what happens when an AI assistant is asked to write onboarding copy for your product:
1. Without any context
2. With `voice-and-tone.md` included
3. With `voice-and-tone.md` + `personas.md` included

Use a separate chat for each version and check which files the assistant used. If you use one chat for all three, explain that later responses can draw on the files and messages you shared earlier.

Discuss: what changed? What didn't? What would you add to your files based on what you saw?

---

## After this session (before Week 4)

First, finish your two remaining foundations files:

- `content/foundations/component-patterns.md`: define rules and good and bad examples for each component section. Include measurable limits where they help.
- `content/foundations/accessibility.md`: review the starter rules, adapt them to your product, and complete the missing standards and examples.

Replace all unfinished placeholders and keep the template headings. If a component does not apply to your product, explain why in that section instead of leaving placeholder text. Check that these rules agree with your voice, personas, and grammar and style files.

Then write the system instructions for your product in `content/instructions.md`. The file is a template. Replace each `[placeholder]` with your own content.

It describes what the product is, who the users are, what the voice is like, and the rules the AI follows when writing copy. Keep it under about 300 words. It points to your foundations files for detail. Think of it as a system prompt you'd give a writing assistant.

The `build-system-prompt` skill coaches you through it. It reviews what you write. It does not write it for you.

Then test it:

1. Pick one request, such as an error message for a failed upload. Ask for it in a separate chat without your product files or instructions. Save the response and note which files the assistant used.
2. Run `/test-copy` in Copilot Chat and provide that response for comparison. If the command is unavailable, ask your coding assistant to answer the same request using your product files, then compare the two responses. Ask your assistant to save the two responses as samples in `content/evals.json`, with clear IDs and the correct component. Review the file changes, then run `npm run evals` or expand Test cases and results in Evaluations. Check the copy against your written rules too. The starter evals cover only their example criteria.
3. Tell your assistant to read `content/instructions.md` and the relevant foundations files when writing copy. Check which files it uses. If you use Copilot, you can add a line to `.github/copilot-instructions.md`, such as: "When writing copy for [your product], follow `content/instructions.md` and the files in `content/foundations/`." Ask your coding assistant for a button label, inspect its file references, and check the result against your rules.
4. Run `npm run prompt` and note the token count.

Run `npm run check:strict` to find any remaining placeholders in your five foundations files and instructions. Fix the errors, then commit your changes on a branch, open a PR on your fork, and merge it as you did in Week 2.

Come to Week 4 ready to show both responses, name the files each chat used, and explain how well the copy follows your rules.

**Done when:** all five foundations files and `content/instructions.md` are complete, `npm run check:strict` shows no errors, your PR is merged, and you can explain the comparison against your rules. The outputs do not have to differ.
