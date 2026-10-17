# Pre-PR Checklist

Run through this before you open a pull request.

---

- [ ] I'm on a branch, not on `main`. (`git branch` shows an asterisk next to my branch name, not `main`)
- [ ] My commit message describes what I actually changed, not "update" or "wip"
- [ ] `npm run check` shows no errors
- [ ] If I changed `content/evals.json`, `npm run evals` passes
- [ ] The file I edited is the file I meant to edit (check `git status` or the PR diff)
- [ ] I've read through my changes at least once before submitting
- [ ] The content I added is complete. No placeholder text is left unfilled, unless I left it on purpose for a later step
- [ ] I haven't accidentally included changes to files I didn't mean to touch
- [ ] My branch is up to date with `main`, or I know it is not and that is intentional
- [ ] I will open the PR on my own fork (base repository is my fork)

---

If everything is checked: open the PR.  
If anything is unchecked: fix it first.
