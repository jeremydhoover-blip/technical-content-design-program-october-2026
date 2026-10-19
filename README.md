# Technical Content Designer Program, October 2026

The working repo for the October 2026 Technical Content Designer Program, run by UX Content Collective. You use it across all four sessions.

You build a content system for your own product in this repo. The app, ContentLab, shows it. Copilot skills, prompts, and scripts in the repo help you write it, check it, and test it against AI output.

---

## What is in here

```
content/foundations/    Your five content system files
content/instructions.md Your system prompt for your product
content/evals.json      Your eval criteria and samples
content/examples/luma/  A finished example to read, not copy
exercises/              Weekly task cards, learning objectives, hints, prep
scripts/                doctor, check, evals, and prompt commands
docs/                   Setup, AI tooling guide, key terms, repository map
public/                 App images and favicon
checklists/             Pre-PR and PR review checklists
src/                    The ContentLab app. You edit strings.json only
.github/                Copilot skills, prompts, agents, instructions, and CI
CONTRIBUTING.md         How to branch, commit, and open PRs
```

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

## Get started

1. **Fork** this repo. Click Fork on GitHub.
2. **Clone** your fork:

   ```bash
   git clone https://github.com/YOUR-USERNAME/technical-content-design-program-october-2026
   cd technical-content-design-program-october-2026
   ```

3. **Install** dependencies. You need Node 20 or later.

   ```bash
   npm install
   ```

4. **Check** your setup:

   ```bash
   npm run doctor
   ```

5. **Run** the app, then open [http://localhost:5173](http://localhost:5173):

   ```bash
   npm run dev
   ```

Full instructions are in [docs/SETUP.md](docs/SETUP.md).

---

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the app |
| `npm run doctor` | Checks your setup |
| `npm run check:tooling` | Validates AI tooling and documentation references |
| `npm run check` | Validates your content files and strings |
| `npm run evals` | Runs your eval criteria against your samples |
| `npm run prompt` | Shows the context an AI would get from your files, and its size |
| `npm run build` | Builds the app |

---

## The app

- **Home:** where to start
- **ContentLab:** your five files and the Luma example, rendered. Shows how many files are complete
- **Evaluations:** view your eval criteria and inspect test cases and results
- **Exercises:** the weekly task cards
- **Resources:** setup, AI tooling, key terms, and checklists

---

## Work with your coding assistant

Use the assistant in your chosen coding environment. Ask it to read `AGENTS.md` and the files relevant to your task. The repo also includes optional Copilot skills, prompts, and agents. In a supported Copilot session, try:

- "Use the content-audit skill on my content system"
- `/review-copy` on a selected string
- `/stuck` when you are not sure what is next

See [docs/AI-TOOLING.md](docs/AI-TOOLING.md) for the full list.

---

## What you build

By Week 4 you have a complete content system for your product: voice and tone, personas, grammar and style, component patterns, and accessibility standards. You also have system instructions that point an AI at those files, and evals that test whether the AI followed them.

You also practice the contributor workflow: branches, commits, and pull requests, with CI checking your work.

---

## Questions

Ask in the UXCC Circle community. Your instructor and cohort members are there between sessions.
