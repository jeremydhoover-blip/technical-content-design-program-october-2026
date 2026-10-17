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
- **Playground:** build the AI prompt from your files and run your evals on any copy
- **Exercises:** the weekly task cards
- **Resources:** setup, AI tooling, key terms, and checklists

---

## Work with Copilot

The repo includes skills, prompts, and agents that know how the program works. Try these in Copilot Chat:

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
