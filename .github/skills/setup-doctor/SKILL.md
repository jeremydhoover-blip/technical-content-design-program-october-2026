---
name: setup-doctor
description: "Diagnose and fix local setup problems. Use when a participant says npm install fails, the app will not start, node or git is not found, git push fails, a commit asks for a name or email, port 5173 is busy, or they are unsure whether their machine is ready. Runs npm run doctor and explains each result in plain language."
argument-hint: "Optional: paste the error message you see"
---

# Setup Doctor

Help a participant get their machine working. Participants are content designers, not engineers. Use plain language and give one fix at a time.

## When to use

- Install, start, clone, commit, or push errors
- "Is my setup ready?" questions before a session

## Procedure

1. Run `npm run doctor` in the terminal. It checks Node 20 or later, npm, Git, the Git name and email, the remote, the branch, and `node_modules`.
2. If the participant pasted an error, match it against [common fixes](./references/fixes.md) first.
3. Explain each `[fail]` and `[warn]` line in one sentence: what it means, then the exact command to fix it.
4. After the fix, run `npm run doctor` again to confirm.
5. If everything passes, tell them to run `npm run dev` and open http://localhost:5173.

## Rules

- Never suggest `sudo npm install`.
- Do not run `git config --global` or install software without telling the participant what it changes and getting a yes.
- Identify the operating system before giving terminal commands. Windows PowerShell and Mac Terminal differ.
- If the same fix fails twice, stop and suggest asking the instructor in the UXCC community. Include the output of `npm run doctor`.

## Output format

1. One-line status: ready, or the number of problems found
2. Problems in order, each as: what is wrong, then the command to fix it
3. The next step
