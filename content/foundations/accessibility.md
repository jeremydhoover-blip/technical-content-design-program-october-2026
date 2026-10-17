# Accessibility writing standards: [Your product name]

> **Guide:** This file sets the baseline for writing that works for everyone, including people using screen readers and people reading under stress. The starter rules below follow common accessibility guidance. Keep them, tighten them for your product, and add the specifics: reading level target, how required fields are marked, how links that open new tabs are described. Replace every `[bracketed]` placeholder. See the finished version for Luma in ContentLab > Examples.

These are baseline requirements for every string in [Your product name], not optional extras.

---

## Plain language

**Rules:**
- Use common words over formal ones. "Use" not "utilize."
- Write short sentences. One idea each.
- [Your reading level target, for example grade 8]
- [Rule for technical terms, for example define on first use]

**Good:**
> "[example]"

**Not:**
> "[example]"

---

## Alternative text for images and icons

**Rules:**
- Convey meaning, not appearance.
- Decorative images use an empty `alt` attribute.
- Do not start with "Image of" or "Icon of."
- [Rule for icon-only buttons]

**Good:**
> `[example alt text or aria-label]`

**Not:**
> `[example]`

---

## Link text

**Rules:**
- Describe where the link goes. Never "click here."
- Each link on a page has unique, meaningful text.
- [Rule for links that open in a new tab]

**Good:**
> "[example]"

**Not:**
> "[example]"

---

## Form labels and instructions

**Rules:**
- Every field has a visible label. Placeholders are never labels.
- [Rule for marking required or optional fields]
- [Rule for where instructions and limits go]

---

## Error identification

**Rules:**
- Say which field failed and how to fix it.
- Never rely on color alone.
- [Rule for forms with multiple errors]

**Good:**
> "[example]"

**Not:**
> "[example]"

---

## Reading level and cognitive load

**Rules:**
- One concept per sentence. One task per screen where possible.
- Numbered lists for steps. Bulleted lists for unordered items.
- Use the same word for the same thing everywhere.
- [One rule specific to your product or audience]

**Test:** [How will you check that a string is easy to read, for example "a new user can read it once and know what to do"]
