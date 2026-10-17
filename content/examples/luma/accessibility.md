# Accessibility Writing Standards: Luma

> **Worked example.** This is a finished file for Luma, a fictional team workflow app. Read it to see what done looks like. Write your own for your product instead of copying this one.

This file defines writing practices that support accessible, inclusive experiences in Luma. These aren't optional add-ons. They're baseline requirements for any interface string.

Accessible copy benefits every user, not just users with disabilities. Clear language, accurate descriptions, and well-structured information reduce cognitive load for everyone.

---

## Plain language

Write at a reading level that's accessible to a broad audience. Aim for clear over clever.

**Rules:**
- Use common words over technical or formal ones ("use" not "utilize," "start" not "commence")
- Write short sentences. One idea per sentence.
- Define technical terms on first use, or avoid them where a plain alternative exists
- Use active voice; passive constructions add length and reduce clarity
- Break up long content with headings and short paragraphs

**Good:**
> "Your session expired. Sign in again to continue."

**Not:**
> "Due to inactivity, your authenticated session has been terminated. Please re-authenticate to resume your workflow."

---

## Alternative text for images and icons

Alt text describes images and icons for users who can't see them, including screen reader users and users in low-bandwidth contexts where images don't load.

**Rules:**
- Write alt text that conveys meaning, not just what the image looks like
- For decorative images (visual embellishment with no informational value), use an empty alt attribute: `alt=""`
- For icons that accompany a visible label, the icon typically needs no alt text. The label carries the meaning.
- For standalone icon buttons (no visible label), the button needs an accessible name via `aria-label` or a visually hidden label
- Don't start with "Image of..." or "Icon showing..." because screen readers already announce "image"

**Good:**
> `alt="Bar chart showing revenue growth from Q1 to Q4"`  
> `aria-label="Close dialog"`

**Not:**
> `alt="chart"`  
> `alt="Image of a bar chart"`  
> `alt="close-icon.svg"`

---

## Link text

Link text should describe where the link goes or what it does, not just "click here."

**Rules:**
- Use descriptive link text: "Read the setup guide" not "Click here"
- Don't use the URL as the link text in body copy
- Each link on a page should have unique, meaningful text because screen reader users often navigate by links alone
- If a link opens in a new tab, indicate this: "Read the setup guide (opens in new tab)"

**Good:**
> "Read the [setup guide](#) before your first session."

**Not:**
> "[Click here](#) to read the setup guide."  
> "For more information, [visit this page](#)."

---

## Form labels and instructions

Every form field needs a visible label. Users shouldn't have to infer what a field is for.

**Rules:**
- Always use a visible label. Never rely on placeholder text alone
- Labels appear above the field, not inside it
- Write labels as brief noun phrases: "Email address," "Project name," "Due date"
- For required fields, mark them consistently. Either mark required fields or mark optional ones, not both
- Instructions that apply to the whole form (like password requirements) belong before the form or directly below the relevant field, not after the submit button
- If character limits matter, show them: "Project name (50 characters max)"

---

## Error identification

When something goes wrong in a form or interaction, users need to know what failed and how to fix it.

**Rules:**
- Identify the specific field or action that caused the error. Don't just say "there were errors on this page"
- Describe the error in plain language: "Enter a valid email address" not "Invalid input"
- Tell users how to resolve it
- Don't rely on color alone to communicate an error. Include a text label or icon with text
- For forms with multiple errors, list all of them at the top and also inline next to each affected field

**Good:**
> "Enter a valid email address." (inline, below the field)

**Not:**
> "This field contains an error." (no specifics)  
> An error indicated only by a red border (no text)

---

## Reading level and cognitive load

Complex interfaces create cognitive load. Writing decisions directly affect how hard a user has to work to understand the product.

**Rules:**
- Chunk information. One concept per sentence. One task per screen where possible.
- Use numbered lists for sequential steps. Use bulleted lists for unordered items.
- Don't bury critical information in the middle of a long paragraph
- Use headings to structure long content so users can scan before they read
- Avoid double negatives: "You can share this" not "This cannot not be shared"
- Consistent terminology reduces load. If you've called it a "project" in six places, don't call it a "workspace" on the seventh

**Testing your copy:**
After writing, ask: can someone read this in one pass and know what to do? If not, simplify.
