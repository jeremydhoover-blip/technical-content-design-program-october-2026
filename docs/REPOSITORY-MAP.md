# Repository Map

Every folder and file in the repo, what it is, and whether it is yours to edit.

---

## `content/`

The content you build across the program.

### `content/foundations/`

Your five content system files. ContentLab renders them. AI tools read them as context.

| File | What it is | What you do with it |
|------|------------|---------------------|
| `voice-and-tone.md` | Your product's personality and how tone shifts by context | Write voice attributes, tone by context, and anti-patterns |
| `personas.md` | The people who use your product | Write two personas with goals, frustrations, vocabulary, and copy needs |
| `grammar-and-style.md` | Writing conventions and terminology | Add your rules and your terminology table |
| `component-patterns.md` | Copy patterns for buttons, errors, empty states, toasts, and more | Define the pattern for each component your product uses |
| `accessibility.md` | Accessibility writing standards | Adjust for your product and your users |

### `content/instructions.md`

Your system prompt for your product. Written in Week 3. It points an AI at your foundations files.

### `content/evals.json`

Your eval criteria and samples. Edited in Week 4. Run with `npm run evals` or in Playground > Eval runner.

### `content/examples/luma/`

A finished content system for Luma, a fictional team workflow app. Read it to see what done looks like. Do not copy its wording. It is read-only reference.

---

## `exercises/`

### `exercises/week-1/` through `exercises/week-4/`

| File | What it is | What you do with it |
|------|------------|---------------------|
| `README.md` | The task card, with in-session steps and after-session tasks | Follow it during the session |
| `LEARNING-OBJECTIVES.md` | What you can do by the end of the week | Use it to self-assess |
| `PREP.md` | What to do before the session | Complete it before each session |
| `hints.md` | Help for common sticking points | Open it only when stuck |

---

## `scripts/`

Command-line tools. Run them with `npm run`.

| File | Command | What it does |
|------|---------|--------------|
| `doctor.mjs` | `npm run doctor` | Checks your setup |
| `check-content.mjs` | `npm run check` | Validates content files and `src/strings.json` |
| `run-evals.mjs` | `npm run evals` | Runs `content/evals.json` |
| `build-prompt.mjs` | `npm run prompt` | Prints the assembled AI context and its token size |

---

## `docs/`

| File | What it is |
|------|------------|
| `SETUP.md` | Install tools, fork, clone, run the app |
| `AI-TOOLING.md` | What the skills, prompts, agents, and instructions do |
| `KEY-TERMS.md` | Glossary of terms used in the program |
| `REPOSITORY-MAP.md` | This file |

---

## `checklists/`

| File | What it is |
|------|------------|
| `pre-pr.md` | Check before you open a pull request |
| `pr-review.md` | Check when you review a pull request |

---

## `src/`

The app. You edit `strings.json` only.

| File | What it is | What you do with it |
|------|------------|---------------------|
| `strings.json` | All UI text for the app, grouped by view | Edit values to change app copy. Never rename keys |
| `main.js` | Navigation, rendering, Playground | Read it to see how content reaches the screen. Do not edit |
| `lib/` | Shared logic for the app and the scripts | Do not edit |
| `styles.css` | All CSS | Do not edit |

---

## `.github/`

Tooling for GitHub and Copilot. See [AI-TOOLING.md](AI-TOOLING.md).

| Path | What it is |
|------|------------|
| `copilot-instructions.md` | Always-on instructions for Copilot in this repo |
| `instructions/` | Rules that apply to certain files |
| `skills/` | Repeatable procedures, such as `copy-review` and `write-evals` |
| `prompts/` | Saved requests you run with `/` |
| `agents/` | Chat modes: `coach` and `content-reviewer` |
| `workflows/content-check.yml` | CI. Runs `npm run check`, `npm run evals`, and `npm run build` on every pull request |
| `pull_request_template.md` | The sections every PR description fills in |

---

## Root files

| File | What it is | What you do with it |
|------|------------|---------------------|
| `README.md` | The repo introduction | Add your reflection in Week 4 |
| `CONTRIBUTING.md` | Branching, commits, and PRs | Read before your first PR |
| `AGENTS.md` | Rules for AI agents working in the repo | Read once |
| `index.html` | The HTML shell | Do not edit |
| `package.json` | Scripts and dependencies | Do not edit |
| `vite.config.js` | Build configuration | Do not edit |
| `.nvmrc` | Node version for tools like nvm | Do not edit |
| `.gitignore` | Files Git ignores | Do not edit |
