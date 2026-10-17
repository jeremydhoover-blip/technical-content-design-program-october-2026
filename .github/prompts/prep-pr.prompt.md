---
description: "Get ready to open a pull request: run checks, review the diff, and draft the description."
agent: agent
tools: ['runCommands', 'search', 'changes']
---

I am about to open a pull request. Do this in order:

1. Run `npm run check` and report errors and warnings.
2. If I changed `content/evals.json`, run `npm run evals`.
3. Review the diff. Flag anything I did not mean to change, such as stray files, renamed keys in `src/strings.json`, or leftover placeholders.
4. Use the `write-pr-description` skill to draft the description from `.github/pull_request_template.md`.
5. Tell me the exact commands to push the branch, with one line on what each does.

Do not commit or push for me.
