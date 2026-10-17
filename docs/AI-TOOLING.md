# AI Tooling Guide

This repo is set up so GitHub Copilot knows how the program works, what it may do, and what it must not do. You do not need to install anything extra. The tooling lives in the `.github/` folder, and scripts in `scripts/` do the checking.

If you have never seen these files before, read this once, then try one skill.

---

## The five pieces

| Piece | Where it lives | What it is |
|---|---|---|
| Repo instructions | `.github/copilot-instructions.md`, `AGENTS.md` | Always-on context. Copilot reads these on every request |
| Scoped instructions | `.github/instructions/*.instructions.md` | Rules that apply to certain files only, such as `src/strings.json` |
| Skills | `.github/skills/<name>/SKILL.md` | A repeatable procedure for one kind of task, with its own references and scripts |
| Prompts | `.github/prompts/*.prompt.md` | A saved request you run by typing `/` and its name |
| Agents | `.github/agents/*.agent.md` | A mode with a defined role and tool limits, chosen from the chat mode picker |

The difference that matters: instructions are always on, skills load when the task matches, prompts run when you call them, and agents change how Copilot behaves for a whole conversation.

---

## Skills in this repo

| Skill | Use it when |
|---|---|
| `setup-doctor` | Install, start, or git problems. Runs `npm run doctor` |
| `edit-strings` | Changing text in `src/strings.json` safely |
| `commit-message` | You are about to commit and want a clear message |
| `write-pr-description` | You are about to open a pull request |
| `content-writer` | Writing copy with your own content system |
| `copy-review` | Checking copy against your rules |
| `content-audit` | Finding gaps in your five files |
| `build-system-prompt` | Writing `content/instructions.md` (Week 3) |
| `write-evals` | Writing criteria in `content/evals.json` (Week 4) |

Ask for a skill by describing the task. "Review this error message" loads `copy-review`. You can also name it: "Use the content-audit skill on my voice and tone file."

Each skill is a folder. Open one and read `SKILL.md`. It is plain markdown. The `description` at the top is how Copilot decides when to use it. This is the same pattern as the content system you are building: a structured file that tells an AI how to behave.

---

## Prompts

Type `/` in Copilot Chat and pick one.

| Prompt | What it does |
|---|---|
| `/review-copy` | Reviews the copy you have selected |
| `/explain-content-file` | Explains what one foundations file is for and what yours is missing |
| `/prep-pr` | Runs the checks, reviews your diff, and drafts the PR description |
| `/test-copy` | Writes copy with and without your content system and compares them |
| `/stuck` | Tells you the next small step for your current week |

---

## Agents

Open the chat mode picker and choose one.

- **coach** guides you through the week. It will not do the exercise for you or reveal hints unless you ask.
- **content-reviewer** reviews copy, files, or a diff. It only reads. It never edits.

---

## Scripts

Skills and prompts call these. You can run them yourself.

| Command | What it does |
|---|---|
| `npm run doctor` | Checks Node, Git, your Git name and email, the remote, the branch, and `node_modules` |
| `npm run check` | Validates your content files and `src/strings.json`. Errors fail. Placeholders warn |
| `npm run check:strict` | Same, but placeholders also fail. Use before the final PR |
| `npm run evals` | Runs every sample in `content/evals.json` |
| `npm run evals -- --text "Save your work" --component button` | Tests one string |
| `npm run prompt` | Prints the context an AI would receive from your files and its token size |

The same logic runs in the app under Playground. The prompt builder and the eval runner use the shared code in `src/lib/`.

---

## How your content system reaches Copilot

Your files are only useful to an AI when it reads them. There are three ways.

1. **Attach them.** In Copilot Chat, type `#file` or drag `content/instructions.md` and the foundations files into the chat. This works for one conversation.
2. **Point to them.** Add one line to `.github/copilot-instructions.md`, such as: "When writing copy for [your product], follow `content/instructions.md` and the files in `content/foundations/`." Copilot then reads your rules on every request in this repo.
3. **Package them as a skill.** A skill that loads your files and applies them on request. The `content-writer` skill does this already.

The with-and-without test is the proof. Run `/test-copy` with and without your instructions and compare.

---

## Token size

AI models read text in tokens. A token is roughly three or four characters. Run `npm run prompt` and read the last line. If your assembled context is very large, shorten the files or trim examples. Short, specific rules usually beat long ones.

---

## Limits you should know about

- Copilot can be wrong. Read what it gives you.
- It follows rules that are specific. It ignores rules that are vague.
- It does not know your product unless your files say so.
- Do not paste private or customer data into any AI tool.
