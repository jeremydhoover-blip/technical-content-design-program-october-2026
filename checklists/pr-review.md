# PR Review Checklist

Use this when reviewing a pull request, your own or someone else's.

---

## The PR itself

- [ ] The PR title describes what changed (not "Week 2" or "updates")
- [ ] The description explains what changed and why
- [ ] The diff shows only the intended changes, with no accidental edits to unrelated files
- [ ] The CI checks are green, or the failures are explained

---

## The content

- [ ] Copy follows the voice-and-tone guidelines (check `content/foundations/voice-and-tone.md`)
- [ ] Labels, headings, and button text are in sentence case (not Title Case)
- [ ] No typos, broken formatting, or incomplete sentences
- [ ] Markdown renders correctly, with no broken headings, unclosed bold, or misindented lists
- [ ] No placeholder text left unfilled that should have been replaced

---

## The change in context

- [ ] The change makes sense in the context of the file it's in
- [ ] It doesn't introduce terminology that conflicts with the rest of the content system
- [ ] If this change touches `src/strings.json`, no key was renamed and `npm run check` passes

---

If everything looks good: approve the PR or leave a comment explaining what you'd want changed.
