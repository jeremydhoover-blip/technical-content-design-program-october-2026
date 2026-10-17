# Audit criteria

Apply these to every finished section.

## Specific, not aspirational
A rule passes if someone else could check a string against it. "Be clear" fails. "Use common words over formal ones" passes.

## Has examples
Each rule that affects wording needs a good example and, where useful, a not-example. A rule with no example is easy for an AI to misread.

## Consistent terminology
The same concept uses the same word in every file. Flag a file that says "project" where another says "workspace".

## No conflicts
Rules in different files must not contradict each other. Check capitalization, punctuation, and tone across `voice-and-tone.md`, `grammar-and-style.md`, and `component-patterns.md`.

## Product-specific
The file should be unmistakably about this product. If you could paste it into another product's repo unchanged, it is too generic.

## Personas have real vocabulary
Each persona lists words the person actually says. A persona with generic goals only is not usable for evaluating copy.

## Anti-patterns are checkable
Each anti-pattern names a pattern and shows a bad and a good version. These become evals in Week 4.

## Machine-readable structure
Headings match the template. Lists use one consistent format. Placeholders are gone.
