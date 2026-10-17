# Week 2: Reading and Changing

Last week you got the app running and oriented yourself in the repo. This week you're going to start making real changes, and you're going to understand why structure matters.

---

## In session

### 1. File types that matter

You'll work with three file types across this program:

**Markdown (.md)**: plain text with simple formatting syntax. The `content/foundations/` files are Markdown. So are the exercise files. When the app renders them, the `#` headings become HTML headings, `**bold**` becomes bold, and so on.

**JSON (.json)**: structured data. `src/strings.json` is JSON. It's a collection of key-value pairs. Keys are labels; values are the strings you see in the UI. Engineers use JSON to manage content separately from code logic.

**YAML (.yml or .yaml)**: another structured format, often used for configuration files. It uses indentation instead of brackets. Open `.github/workflows/content-check.yml`. It's the file that tells GitHub to run `npm run check`, `npm run evals`, and `npm run build` on every pull request. You'll see it run later today.

Open one example of each in VS Code and read through it. Notice what you can infer about the content just from the structure.

### 2. Why structure matters for AI systems

Language models read text. They don't understand visual layout, they understand structure: headings, lists, consistent terminology, clear sections.

When you write `## The voice` in a Markdown file and follow it with a bulleted list of attributes, an AI reading that file can use that structure to understand what the section is about and what each item means. An unstructured paragraph of the same information is much harder to use.

Your `content/foundations/` files aren't just documentation. They're machine-readable instructions. Structure is infrastructure.

### 3. Edit your personas file

Open `content/foundations/personas.md`. Update the `[Your product name]` placeholder with the product you chose last week. Then work through at least one full persona section. Fill in the role, goals, pain points, vocabulary, and what they need from copy.

Make it specific to your product. Personas that are too generic aren't useful for writing or for evaluating AI output. Read the Luma personas in ContentLab for a sense of depth, then write your own.

When you finish, ask Copilot Chat: "Use the content-audit skill on personas.md." It reports gaps. You decide what to change.

### 4. Change one UI string

Open `src/strings.json`. Pick one value in the `dashboard` group and improve it. Change only the text between the quotes. Do not change a key.

Save, and watch the app update. Then run:

```bash
npm run check
```

It reports errors if you broke the JSON or renamed a key. Fix any errors before you continue. This is content and code meeting: you changed what the user reads without touching the logic.

### 5. Create a branch, commit

If you're not already on a branch from last week, create one:

```bash
git checkout -b your-name/week-2
```

Commit each change on its own. If you have uncommitted `voice-and-tone.md` edits from Week 1, commit those first:

```bash
git add content/foundations/voice-and-tone.md
git commit -m "Add voice attributes for [your product name]"
```

Then your personas:

```bash
git add content/foundations/personas.md
git commit -m "Add persona 1 for [your product name]"
```

Then the string:

```bash
git add src/strings.json
git commit -m "Clarify dashboard heading copy"
```

Write a commit message that describes what you actually changed. "Updated stuff" is not a commit message. The `commit-message` skill can help.

### 6. Open a pull request

Push your branch to GitHub:

```bash
git push origin your-name/week-2
```

Go to your fork on GitHub. You should see a banner prompting you to open a pull request. Click it.

**Change the base repository.** GitHub defaults to the original repo, not yours. At the top of the page, set **base repository** to your fork and keep **base** as `main`. If you skip this step, you open a PR on the instructor's repo.

Fill in the PR template. The `write-pr-description` skill can draft it. Submit the PR.

### 7. Read the checks, then merge

On the PR page, find the checks at the bottom. GitHub runs the workflow you opened earlier. A green check means `npm run check`, `npm run evals`, and `npm run build` passed. A red X means something failed. Click **Details** and read why.

If the checks are green, click **Merge pull request**. Then update your local copy:

```bash
git checkout main
git pull
```

Your changes are now on `main` in your fork.

**Done when:** you have one merged PR on your fork, your `main` has your changes, and `npm run check` shows no errors.

---

## After this session (before Week 3)

Add the second persona to your `personas.md` file and open a second PR. Practice the full workflow on your own this time: branch, edit, commit, push, PR, check, merge. Use `/prep-pr` in Copilot Chat before you open it.

Come to Week 3 with both personas filled in and two merged PRs.

**Done when:** `personas.md` has two personas, and both PRs are merged on your fork.
