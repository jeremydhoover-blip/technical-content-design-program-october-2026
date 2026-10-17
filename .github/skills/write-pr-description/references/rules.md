# PR description rules

## Title
Same style as a commit message: present tense, specific, under 72 characters. "Add voice attributes and anti-patterns", not "Week 1".

## Summary
Name the files and the kind of change. One or two sentences.

## Why
The intent. What does the content system now cover that it did not before? What problem would a reader or an AI have had without it?

## Content decisions
Short bullets. Each is a choice someone could disagree with: a term chosen, a rule added, an example picked, a rule left out and why.

## What to review
Tell the reviewer where to look. "Check whether the anti-patterns are specific enough to test."

## Checks
State what you ran: `npm run check`, `npm run evals`. Quote the result in a few words.

## Good example

> **Summary:** Fill in `voice-and-tone.md` with three attributes and four anti-patterns for Luma.
> **Why:** The file was a template. AI tools had no voice to follow.
> **Content decisions:**
> - "Direct" includes a stated extreme to avoid, "blunt"
> - Error tone is calm and specific, with no apology
> **What to review:** Are the anti-patterns testable?
> **Checks:** `npm run check` shows no errors.
