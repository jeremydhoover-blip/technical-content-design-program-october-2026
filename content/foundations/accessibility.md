# Accessibility writing standards: Insight Timer


These are baseline requirements for every string in Insight Timer, not optional extras.

---

## Plain language

**Rules:**
- Use common words over formal ones. "Use" not "utilize."
- Write short sentences. One idea each.
- Write to a grade 10 reading level
- In situations where there is no plain-language equivalent for a medical, therapeutic or scientific term (eg: perimenopause, cortisol, biofeedback, parasympathetic nervous system, adrenaline), use that term. However, keep these terms to a minimum throughout the text

**Good:**
> "Whether you’re struggling with sleep, anxiety, ADHD or perimenopause, our free library of clinically validated techniques gives you a set of tools that work for you."

**Not:**
> "Regular meditation and bodily awareness can decrease your levels of cortisol, increase your levels of melotonin, and encourage auditory-neural entrainment."

---

## Alternative text for images and icons

**Rules:**
- Convey meaning, not appearance.
- Decorative images use an empty `alt` attribute.
- Do not start with "Image of" or "Icon of."
- For icon-only buttons, the alt text should tell users what destination the button leads to, or what action will be taken upon pressing it

**Good:**
> `Start playing "Unwind into Surreder: 10-Minute Release and Relinquish" by Sarah Blondin`

**Not:**
> `Play`

---

## Link text

**Rules:**
- Describe where the link goes. Never "click here."
- Each link on a page has unique, meaningful text.
- Use the active voice for link alt text where possible

**Good:**
> "Review meditation tracks about metaphysics"

**Not:**
> "Metaphysics"

---

## Form labels and instructions

**Rules:**
- Every field has a visible label. Placeholders are never labels.
- If a field label has a common acronym associated with it, spell out the acronym first, then introduce the acronym immediately afterwards in brackets
- If a field is optional, state that information explicitly
- Placeholder text within a field should restate the field label and include a verb

---

## Error identification

**Rules:**
- Say which field failed and how to fix it, including why the error occurred.
- Never rely on color alone.
- If multiple errors occur on a screen, a master error should appear listing all the individual errors, so users can address them individually

**Good:**
> "Please accept the Terms and Conditions to continue"

**Not:**
> "Check the checkbox to continue."

---

## Reading level and cognitive load

**Rules:**
- One concept per sentence. One task per screen where possible.
- Numbered lists for steps. Bulleted lists for unordered items.
- Use the same word for the same thing everywhere.
- Titles for meditation tracks should be 10 words maximum
- Meditation tracks uploaded by the same Teacher should be unique within that Teacher's offerings 

**Test:** An Insight Timer listener should know exactly what benefit a particular meditation track is supposed to offer before pressing Play.
