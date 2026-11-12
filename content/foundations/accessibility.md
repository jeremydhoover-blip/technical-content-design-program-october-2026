# Accessibility writing standards: The Saizen

> **Guide:** 

These are baseline requirements for every string in The Saizen, not optional extras.

---

## Plain language

**Rules:**
- Use common words over formal ones. "Use" not "utilize."
- Write short sentences. One idea each.
- Write copy at an 8th-grade reading level.
- Define acronyms the first time they're used.

**Good:**
> "The JASRAC (Japanese Society for Rights of Authors, Composers and Publishers) copyright strikes YouTube reaction videos for Sony artists."

**Not:**
> "The JASRAC will copyright strike your reaction video if you react to Sony artists."

---

## Alternative text for images and icons
Alt text describes images and icons for users who can't see them, including screen reader users and users in low-bandwidth contexts where images don't load.

**Rules:**
- Write alt text that conveys meaning, not just what the image looks like
- For decorative images (visual embellishment with no informational value), use an empty alt attribute: alt=""
- For icons that accompany a visible label, the icon typically needs no alt text. The label carries the meaning.
- For standalone icon buttons (no visible label), the button needs an accessible name via aria-label or a visually hidden label
- Don't start with "Image of" or "Icon showing" because screen readers already announce "image"

**Good:**
> alt="Bar chart showing the number of increasing J-Rock YouTube views the past ten years."

**Not:**
> alt="chart"
> alt="Image of a bar chart"

---

## Link text

**Rules:**
- Describe where the link goes. Never "click here."
- Each link on a page has unique, meaningful text.
- Each link on a page should have unique, meaningful text because screen reader users often navigate by links alone.
- If a link opens in a new tab, indicate this: "Read the setup guide (opens in new tab)."

**Good:**
> "Read the setup guide before your first session."

**Not:**
> "Click here to read the setup guide."
> "For more information, visit this page."

---

## Form labels and instructions
**Rules:**
Every form field needs a visible label. Users shouldn't have to infer what a field is for.
- Always use a visible label. Never rely on placeholder text alone
- Labels appear above the field, not inside it
- Write labels as brief noun phrases: "Email address"
- For required fields, mark them consistently. Only mark required fields.
- Instructions that apply to the whole form (like password requirements) belong before the form or directly below the relevant field, not after the submit button.

---

## Error identification

**Rules:**
- Identify the specific field or action that caused the error. Don't just say "there were errors on this page."
- Describe the error in plain language: "Enter a valid email address" not "Invalid input."
- Tell users how to resolve it.
- Don't rely on color alone to communicate an error. Include a text label or icon with text.
- For forms with multiple errors, list all of them at the top and also inline next to each affected field.

**Good:**
> "Enter a valid email address." (inline, below the field)

**Not:**
> "This field contains an error." (no specifics)
> "An error indicated only by a red border (no text)"

---

## Reading level and cognitive load

**Rules:**
- Users will largely read content on mobile phones. Ensure paragraphs are not very large.
- When writing about international artists, explain cultural terms and define foreign words. 
- Use the same word for the same thing everywhere.
- J-Rock is genre-fluid. Be mindful how you describe the music. Different people define genres differently so ladder your content up to consistent definitions of genres. 

**Test:** Testing your copy: After writing, ask: can someone read this in one pass without having to go to a Japanese dictionary, an English dictionary, or a music dictionary to understand a term.
