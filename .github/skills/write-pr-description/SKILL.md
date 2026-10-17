---
name: write-pr-description
description: "Write a pull request description for a change to content files. Use when a participant is about to open a PR, asks what to put in the description, or wants a PR summary. Reads the git diff, runs npm run check, and fills in the PR template sections in .github/pull_request_template.md."
argument-hint: "Optional: anything the diff does not show, such as why you made the change"
---

# Write PR Description

Draft a PR description the participant can edit and paste. The participant owns the reasoning, so ask about intent when the diff does not show it.

## Procedure

1. Run `git status`, `git diff main...HEAD`, `git diff`, and `git diff --staged` to review committed, unstaged, and staged changes. Inspect relevant untracked files listed by status too. If `main` is unavailable, identify the actual base branch first. Confirm the participant is on a working branch before preparing commit or push steps.
2. Run `npm run check`. Include any remaining warnings in the description honestly. Do not hide them.
3. Read `.github/pull_request_template.md` and use its sections and order.
4. Fill each section from the diff. If a section needs intent that the diff cannot show (why a decision was made), ask the participant one question instead of guessing.
5. Apply the [description rules](./references/rules.md).
6. Show the description in a code block so it is easy to copy.

## Rules

- First person, present tense, active voice
- Under 200 words unless the change is large
- Name files and decisions specifically
- Do not claim checks that were not run
- Do not invent reasons

## Output format

The filled template in a code block, then one line listing anything the participant should confirm before posting.
