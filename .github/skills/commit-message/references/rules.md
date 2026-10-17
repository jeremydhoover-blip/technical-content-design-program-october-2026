# Commit message rules

A commit message completes the sentence: "If applied, this commit will ___."

- Present tense, imperative mood: "Add voice attributes", not "Added" or "Adds"
- Specific: name what changed and where
- First line under 72 characters
- No period at the end
- No vague words: "update", "changes", "stuff", "wip", "fix it"

## Good

- `Add voice attributes to voice-and-tone.md`
- `Update persona 1 vocabulary for Luma`
- `Fix broken apostrophes in grammar-and-style.md`
- `Add three criteria to evals.json`

## Not

- `updated stuff`
- `Changes`
- `wip`
- `Week 2 work`

## When a body helps

Add a blank line and a short paragraph only if the reason is not obvious from the diff. Say why, not what.
