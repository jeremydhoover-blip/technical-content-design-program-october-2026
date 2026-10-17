# Week 3: AI as a Technical Collaborator

You have a content system. This week you're going to use it.

---

## In session

### 1. Context windows and tokens

Language models have a limited amount of text they can read and process at one time. That limit is measured in **tokens**: roughly three to four characters per token, or about 75% of a word.

What this means for content designers: you can't just dump everything into a prompt and expect perfect results. You have to be deliberate about what context you provide. A well-structured content system file is easy to include. An unstructured one wastes tokens and produces worse output.

See the size of your own context. Run:

```bash
npm run prompt
```

It prints everything an AI would receive from your files and ends with an estimate of the token count. You can also open **Playground > Prompt builder** in the app, switch files on and off, and watch the size change.

### 2. Writing instructions that work

There's a difference between asking an AI assistant to "write a button label" and giving it a system prompt that includes your voice attributes, your persona, and your component patterns for buttons.

In session, you'll write two versions of the same instruction:
- One with no context
- One with your `content/foundations/` files as context

Compare the output. The point is not that AI is magic. The point is that **structure you've built changes what's possible.**

### 3. What "agentic" means

An agentic AI system doesn't just respond to a prompt. It takes a sequence of actions toward a goal. It might read a file, generate content, check it against rules, and write the result back.

This repo already has some. The `copy-review` skill reads your files, runs `npm run evals` on a string, and reports. The `content-audit` skill reads your files and finds gaps. Open `.github/skills/copy-review/SKILL.md` and read how it is written. It is a plain markdown file. It is also a set of instructions for an agent.

For content designers, this matters because: the systems being built around these models read your files. If your files are well-structured and your rules are clear, the system can use them. If they're vague, the system fills in gaps on its own, and you lose control of the output.

### 4. Giving the AI your files as context

There are three ways to get your content system in front of Copilot. Your instructor demos each.

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

Discuss: what changed? What didn't? What would you add to your files based on what you saw?

---

## After this session (before Week 4)

Write the system instructions for your product in `content/instructions.md`. The file is a template. Replace each `[placeholder]` with your own content.

It describes what the product is, who the users are, what the voice is like, and the rules the AI follows when writing copy. Keep it under about 300 words. It points to your foundations files for detail. Think of it as a system prompt you'd give a writing assistant.

The `build-system-prompt` skill coaches you through it. It reviews what you write. It does not write it for you.

Then test it:

1. Run `/test-copy` in Copilot Chat. Pick a request, such as an error message for a failed upload. It writes the copy with and without your content system and runs your evals on both.
2. Add one line to `.github/copilot-instructions.md` at the bottom, such as: "When writing copy for [your product], follow `content/instructions.md` and the files in `content/foundations/`." Ask Copilot for a button label and see whether it uses your rules.
3. Run `npm run prompt` and note the token count.

Commit your changes on a branch, open a PR on your fork, and merge it, the same way as Week 2.

Come to Week 4 ready to show what changed with and without your instructions.

**Done when:** `content/instructions.md` has no placeholders, `npm run check` shows no errors for it, and you have seen Copilot produce different copy with your instructions than without them.
