# Contributing

This guide explains how to work in your fork. Follow these conventions to keep your changes clean, reviewable, and easy to merge.

---

## How this repo is organized

The main things you edit are in `content/` (your foundations files, `instructions.md`, and `evals.json`) and the values in `src/strings.json`. The exercise files and docs are reference material. You can propose corrections if you find errors, but they are not yours to rewrite.

See [docs/REPOSITORY-MAP.md](docs/REPOSITORY-MAP.md) for a full breakdown of every file and folder.

---

## Branching

Always work on a branch. Never commit directly to `main`.

`main` is the stable version. Your branch is where you work.

**Creating a branch:**

```bash
git checkout -b your-name/week-N
```

Use your name and the week: `maya-chen/week-2`. If you need a second branch in the same week, add a short description: `maya-chen/week-2-personas`.

**Check which branch you're on at any time:**

```bash
git branch
```

Your current branch has an asterisk next to it.

---

## Commit messages

A commit message should complete the sentence: "If applied, this commit will ___."

**Rules:**
- Present tense, imperative mood: "Add voice attributes" not "Added voice attributes"
- Specific: describe what changed, not that something changed
- Under 72 characters for the first line
- No period at the end

**Good:**
- `Add voice attributes to voice-and-tone.md`
- `Update persona 1 goals for Luma app`
- `Fix typo in grammar-and-style terminology table`

**Not:**
- `updated stuff`
- `changes`
- `wip`
- `fixed it`

---

## Pull requests

A pull request is how your changes get reviewed and merged.

**Before you open a PR:**
- Run `npm run check`. Fix every error. Read every warning.
- If you changed `content/evals.json`, run `npm run evals`.
- Run through the [pre-PR checklist](checklists/pre-pr.md)
- Read your own diff before submitting

In Copilot Chat, `/prep-pr` runs these checks and drafts the description for you.

**Open the PR on your own fork.** GitHub defaults to the original repo. On the "Open a pull request" page, change the **base repository** to your fork, and keep the base branch as `main`. Your PR should go from `your-name/week-N` into `main` on your fork.

**PR title:** Same rules as a commit message. "Add persona 2 for Luma" not "Week 2 work."

**PR description:** The PR template gives you the sections: Summary, Why, Content decisions, What to review, and Checks. Fill each in. If it is a straightforward addition, one or two sentences per section is fine. The `write-pr-description` skill can draft it.

**CI:** When you open the PR, GitHub runs `npm run check`, `npm run evals`, and `npm run build`. A green check means they passed. A red X means one failed. Open the details, read the message, fix it, and push again.

**Merge:** After the checks pass and you have reviewed your own diff, click **Merge pull request**. Then update your local copy:

```bash
git checkout main
git pull
```

---

## What to edit vs. what not to edit

**Edit freely:**
- Everything in `content/foundations/`
- `content/instructions.md` (Week 3)
- `content/evals.json` (Week 4)
- The values in `src/strings.json`. Never rename a key.
- Your `README.md` reflection (Week 4)

**Edit with care (only if you've found an error):**
- Exercise files (`exercises/week-*/README.md`, etc.)
- Documentation files (`docs/`)

**Don't edit unless you know what you're doing:**
- `src/main.js`, `src/lib/`, and `src/styles.css`
- `scripts/`
- `.github/` (skills, prompts, agents, workflows)
- `index.html`, `vite.config.js`, and `package.json`

If you want to experiment with the app's code, create a separate branch and keep those changes separate from your content system work.
