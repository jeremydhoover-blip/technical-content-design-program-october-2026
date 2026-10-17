# Criterion types

Every criterion has an `id`, a plain-language `description`, and a `type`. Add `appliesTo` to limit a rule to certain components. Leave it out to apply everywhere.

## mustNotMatch
Fails if the pattern is found. Good for banned punctuation or phrases.

```json
{ "id": "no-exclamation", "description": "Contains no exclamation points", "type": "mustNotMatch", "pattern": "!" }
```

## mustMatch
Fails if the pattern is not found. Good for required elements.

```json
{ "id": "second-person", "description": "Uses second person", "type": "mustMatch", "pattern": "\\b(you|your)\\b", "flags": "i", "appliesTo": ["onboarding"] }
```

In JSON, a backslash is written twice: `\\b`.

## maxWords and minWords
Good for length limits.

```json
{ "id": "button-length", "description": "Button label is 1 to 3 words", "type": "maxWords", "value": 3, "appliesTo": ["button"] }
```

## maxChars
Good for toasts and titles.

```json
{ "id": "toast-length", "description": "Toast is under 60 characters", "type": "maxChars", "value": 60, "appliesTo": ["toast"] }
```

## bannedWords
Fails if any listed word appears as a whole word.

```json
{ "id": "no-filler", "description": "Avoids filler words", "type": "bannedWords", "words": ["simply", "just", "please"] }
```

## sentenceCase
Fails if a word other than the first is capitalized, ignoring acronyms and the start of new sentences. Use `allow` for product names.

```json
{ "id": "sentence-case", "description": "Uses sentence case", "type": "sentenceCase", "allow": ["Luma"] }
```

## Samples

```json
{ "id": "button-bad", "component": "button", "text": "Submit Your Application Now", "expect": "fail" }
```

`expect: "fail"` marks a deliberately bad sample. It counts as working when at least one criterion catches it.
