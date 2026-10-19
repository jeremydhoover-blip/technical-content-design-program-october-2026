# AI Tooling Guide

Use your chosen coding assistant with this repo. The Copilot configuration below is one supported workflow. Its availability depends on the client, workspace trust, and your settings. The tooling lives in the `.github/` folder, and scripts in `scripts/` do the checking.

If you have never seen these files before, read this once, then try one skill.

---

## How you work

We recommend VS Code with GitHub Copilot from Week 1 and use it for the demonstrations. You can use another coding assistant if you prefer. Check that it can read your repo files and follow the same tasks.

Use VS Code, Codex, Claude, or another coding environment to edit the repo and work with your AI assistant. The app runs alongside it.

- Follow the weekly task in Exercises.
- Edit your content files in your coding environment. Review them in ContentLab when you save.
- Ask your assistant to read the relevant files and write or revise copy. Check which files it used.
- Save copy you want to test as samples in `content/evals.json`. Ask your assistant to help, then review the changes.
- Run `npm run evals` in your terminal or inspect your criteria and test cases in Evaluations. Saving the file updates the app.
- The optional context demonstration in Exercises > Week 3 shows assembled text and its size. Your assistant can read the files directly.

The learning app needs no model connection, API key, or local AI installation. Use your existing coding assistant. Copilot-specific prompts and agents are optional; when your tool does not load them, ask for the same task directly and point it to the relevant repo files.

---

## The five pieces

| Piece | Where it lives | What it is |
|---|---|---|
| Repo instructions | `.github/copilot-instructions.md`, `AGENTS.md` | Repo context for clients that support and enable these files |
| Scoped instructions | `.github/instructions/*.instructions.md` | Rules that apply to certain files only, such as `src/strings.json` |
| Skills | `.github/skills/<name>/SKILL.md` | A repeatable procedure for one kind of task, with its own references and scripts |
| Prompts | `.github/prompts/*.prompt.md` | A saved request you run by typing `/` and its name |
| Agents | `.github/agents/*.agent.md` | A role with selected tools, chosen from the agent picker |

Repo instructions provide ongoing context when enabled. Scoped instructions match files. Copilot can select skills by relevance, prompts run when you call them, and custom agents provide a role and tool selection. These mechanisms differ across clients; a file being present does not prove it was loaded.

The `.github/prompts/` slash commands target VS Code Local harness sessions. If your selected harness does not support prompt files, use the relevant skill or give the same request directly. Other coding agents may read `AGENTS.md` without automatically discovering the Copilot-specific files.

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

Ask for a skill by describing the task. "Review this error message" can select `copy-review`; automatic selection is not guaranteed. You can also name it: "Use the content-audit skill on my voice and tone file."

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

Open the agent picker and choose one.

- **coach** guides you through the week. It will not do the exercise for you or reveal hints unless you ask.
- **content-reviewer** reviews copy, files, or a diff using search and read tools. It has no edit or terminal tool. Run the checks yourself and paste their results when requested. Tool restrictions depend on the client honoring the agent configuration.

---

## Scripts

Skills and prompts call these. You can run them yourself.

| Command | What it does |
|---|---|
| `npm run check:tooling` | Checks tooling metadata, local links, npm commands, and documented inventories |
| `npm run doctor` | Checks Node, Git, your Git name and email, the remote, the branch, and `node_modules` |
| `npm run check` | Validates your content files and `src/strings.json`. Errors fail. Placeholders warn |
| `npm run check:strict` | Same, but placeholders also fail. Use before the final PR |
| `npm run evals` | Runs every sample in `content/evals.json` |
| `npm run evals -- --text "Save your work" --component button` | Tests one string |
| `npm run prompt` | Prints the context an AI would receive from your files and its token size |

Evaluations displays the results of the shared eval code in `src/lib/`. The optional Week 3 context demonstration uses the same assembly logic as `npm run prompt`.

---

## How your content system reaches Copilot

Your files are only useful to an AI when it reads them. There are three ways.

1. **Attach them.** In Copilot Chat, type `#file` or drag `content/instructions.md` and the foundations files into the chat. This works for one conversation.
2. **Point to them.** Add one line to `.github/copilot-instructions.md`, such as: "When writing copy for [your product], follow `content/instructions.md` and the files in `content/foundations/`." The repo instruction asks Copilot to read those files when writing product copy. Verify the response references; a path in an instruction does not prove the files were read.
3. **Package them as a skill.** A skill that loads your files and applies them on request. The `content-writer` skill does this already.

Use `/test-copy` for a quick comparison and evaluate the results against your rules. For an independent baseline, generate the generic answer in a separate chat without the product files or product-specific instructions. Two answers in a chat that has already read the rules are only an illustration, and one comparison does not prove reliability.

---

## Verify the setup in VS Code

1. Open this repository folder, not its parent. Confirm Copilot is signed in and the workspace is trusted if you intend to run commands.
2. In Chat, open the customization diagnostics (right-click the Chat view and select **Diagnostics**) and check that the repo instructions, five scoped instruction files, nine skills, five prompts, and two custom agents are discovered without errors. Prompt visibility depends on the selected harness.
3. Ask for a review of `src/strings.json`. Expand the response references and confirm the repo instructions and `strings.instructions.md` were used. Ask for a value edit only when you intend to change it.
4. Ask "Use the content-audit skill on my content system." Confirm it reads the skill and participant files and runs `npm run check`, rather than claiming it did.
5. In a session that supports prompt files, select copy and run `/review-copy`. Confirm file reads and eval output. Run `/stuck` for a week number and check that it reads that week's task card without revealing hints.
6. Select **content-reviewer** and request a review. Confirm there are no edit or terminal tools. Select **coach** and ask for the next step; it should guide rather than complete the exercise.

Run `npm run check:tooling` after maintaining these files. CI runs it too. It catches structural drift, not model behavior, installed extension versions, account access, or whether a live chat actually loaded a file. Recheck the steps above after changing VS Code, the chat harness, or Copilot settings.

Official references: [custom instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions), [agent skills](https://code.visualstudio.com/docs/agent-customization/agent-skills), [prompt files](https://code.visualstudio.com/docs/agent-customization/prompt-files), and [custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents).

---

## Token size

AI models read text in tokens. A token is roughly three or four characters. Run `npm run prompt` and read the last line. If your assembled context is very large, shorten the files or trim examples. Short, specific rules usually beat long ones.

---

## Limits you should know about

- Copilot can be wrong. Read what it gives you.
- It follows rules that are specific. It ignores rules that are vague.
- It does not know your product unless your files say so.
- Do not paste private or customer data into any AI tool.
