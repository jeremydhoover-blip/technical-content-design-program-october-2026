# Week 2: Hints

---

## Markdown syntax

Markdown is plain text with simple conventions for formatting. The most common ones:

```
# Heading 1
## Heading 2
### Heading 3

**bold**
*italic*

- Bullet point
- Another bullet

1. Numbered item
2. Another item

> Blockquote

`inline code`
```

You don't need to memorize all of this. The templates in `content/foundations/` already use the right formatting, you just need to fill in your content without breaking the existing structure.

---

## JSON key-value pairs

JSON uses `"key": "value"` pairs. String values go in double quotes. Nested objects use `{}`. Example:

```json
{
  "dashboard": {
    "heading": "Welcome to the program.",
    "subheading": "Everything you need..."
  }
}
```

If you edit `src/strings.json`, watch for: missing commas between items, mismatched quotes, and unclosed brackets. The app shows an error overlay if the JSON is malformed. Run `npm run check` to get a plain explanation. If you see "that key does not exist", you changed a key name. Change it back and edit only the value.

---

## YAML formatting

YAML uses indentation (spaces, not tabs) to show structure. Example:

```yaml
name: Build
on: push
jobs:
  build:
    runs-on: ubuntu-latest
```

You won't need to write YAML from scratch in this program, but you'll read it in `.github/workflows/content-check.yml`. The most common mistake is mixing tabs and spaces. Use spaces only.

---

## git add / commit / push sequence

The three steps to save and share your changes:

1. **`git add filename`**: stage the specific file you changed (review each file before staging it)
2. **`git commit -m "Your message here"`**: save a snapshot with a description
3. **`git push origin branch-name`**: send your branch to GitHub

If you're not sure what's staged, run `git status`. It shows your branch, staged and unstaged changes, and untracked files. Use `git log` to see commits.

---

## Carrying your Week 1 draft into Week 2

Run `git branch` and `git status`. Create `your-name/week-2` from your Week 1 branch with `git checkout -b your-name/week-2`. Your saved, uncommitted edits stay in the working folder. If that branch already exists, switch to it with `git checkout your-name/week-2`. Use that same branch name when you push.

---

## How to open a PR on GitHub

1. Push your branch: `git push origin your-name/week-2`
2. Go to your fork on GitHub (github.com/YOUR-USERNAME/technical-content-design-program-october-2026)
3. Click the yellow **"Compare & pull request"** banner, or go to the **Pull requests** tab and click **New pull request**
4. Set the **base repository** to your fork. GitHub defaults to the original repo. Then set **base** to `main` and **compare** to your branch.
5. Fill in the PR template, then click **Create pull request**
6. Wait for the checks. If they pass, click **Merge pull request**. Then run `git checkout main` and `git pull` locally.

If the checks fail, click **Details** and read the message. The most common cause is `npm run check` finding an error in `src/strings.json` or a content file. Fix it locally, commit, and push again. The PR updates by itself.

Your PR title should complete the sentence: "If applied, this PR will ___." Use an imperative verb and no final period. Example: `Add persona 1 for your product`.
