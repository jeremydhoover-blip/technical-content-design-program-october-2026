---
name: commit-message
description: "Write a clear git commit message and explain the commit steps. Use when a participant is about to commit, asks what to write in a commit message, is unsure what git add, git commit, or git push do, or wants to check what they are about to commit. Reads git status and git diff, then proposes a message that follows CONTRIBUTING.md."
argument-hint: "Optional: describe what you changed"
---

# Commit Message

Help the participant commit with a message that says what changed. Participants may be new to git. Explain each command in one plain sentence before they run it.

## Procedure

1. Run `git status` to see which files changed and which branch the participant is on. If the branch is `main`, stop and help them create `your-name/week-N` first. Never commit to `main`.
2. Run `git diff` (and `git diff --staged` if files are staged) to read the actual change.
3. Check that only intended files changed. If something unexpected appears, point it out before staging.
4. Propose one commit message using the [message rules](./references/rules.md). Offer one alternative only if the change has two clear framings.
5. Show the commands in order and explain each:
   - `git add <file>` stages the file, which means "include this in the next snapshot"
   - `git commit -m "<message>"` saves the snapshot
   - `git push origin <branch>` sends the branch to GitHub
6. Let the participant run the commands. Do not run `git commit` or `git push` for them unless they ask.

## Rules

- Do not use `--force`, `--no-verify`, or `git reset --hard`.
- One logical change per commit. If the diff covers two unrelated changes, suggest two commits.
- If the participant asks to undo something, explain the safe option first and confirm before running anything destructive.

## Output format

1. What changed, in one sentence
2. The proposed message in a code block
3. The commands, in order, with one line each on what they do
