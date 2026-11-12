# Component patterns: The Saizen

> **Guide:** 

Use this file when writing a new string or reviewing an existing one for consistency.

---

## Buttons

Buttons tell users what will happen when they click.

**Rules:**
- Use imperative verbs. "Choose artist" not "Artist selection"
- Be specific. "Remove artist" not just "Remove" where context is ambiguous.
- Sentence case. Never Title Case.
- Limit copy to 1–2 words. Add a third only when it prevents confusion.

**Primary button:** "Choose" / "Watch" / "Create list"

**Secondary button:** "Cancel" / "Next" / "Go back"

**Destructive button:** 
- "Delete" / "Remove" / "Disconnect": pair with a confirmation dialog
- Never make the default button destructive

**Disabled button:**
- Show the same label as the enabled state.
- Add helper text nearby that explains why it's disabled: "Fill in all required fields to continue.


---

## Labels and placeholder text
Labels identify fields, sections, and data. They're the smallest unit of interface copy and often the most read.

**Rules:**
- Sentence case
- No colon after a label that sits above an input
- Be concrete. "First name" not "Name (first)", or "Full name" if you only need one field
- Match the label to the data, not the action ("Email address" not "Enter your email address")

Placeholder text appears inside an empty input field. It disappears when the user starts typing.

**Rules:**
- Use placeholder text for format hints or examples only, not for labels or instructions
- Don't use placeholder text as a substitute for a visible label. Placeholders disappear and screen readers may not reliably read them
- Use realistic examples: "name@company.com" not "email here"
- Sentence case, no period


**Good:**
> 'name@company.com'
> 'YYYY-MM-DD'
> 'e.g. Marketing'

**Not:**
> Enter your email address
> Type something here

---

## Error messages

### Inline field errors

**Rules:**
- Say what's wrong and how to fix it
- Be specific to the field
- Active voice
- No apology

**Good:**
> "Enter a valid email address."
> "Password must be at least 8 characters."
> "This field is required."

**Not:**
> "Invalid input."
> "Error."
> "Please double-check this field."

### System errors

**Rules:**
- Acknowledge the problem without excessive apology
- Tell the user what to do next
- If the cause is known, state it briefly
- If there's a support path, link to it

**Good:**
> "We couldn't save your changes. Check your connection and try again."
> "That file is too large. The maximum size is 10 MB."
> "Session expired. Sign in again to continue."

**Not:**
> "Oops! Something went wrong!"
> "An unexpected error has occurred. Please contact support."
> "Error 500."

---

## Empty states
Empty states appear when a section has no content yet, or when a search or filter returns nothing.

**Rules:**
- Tell the user what this space is for
- Give them a clear action to fill it, if one exists
- Don't over-explain or over-celebrate
- Match the tone to the context. A first-time experience is different from an accidental empty state

**Good (first time):**
> "No artists found. Look under another genre."

**Good (after a search or filter):**
> "No results. Try adjusting your search or filters."

**Not:**
> "Wow, it's looking a little empty in here!"
> "Nothing to see here."
> "No data available."

---

## Confirmation dialogs
Confirmation dialogs ask users to verify an action before it's taken, usually because it's irreversible or affects other people.

**Rules:**
- The heading should name the action: "Delete this project?"
- The body should explain what will happen: "This will permanently delete the project and all its files. This can't be undone."
- The confirm button mirrors the heading verb: "Delete"
- The cancel button is "Cancel", never "No" or "Go back"
- Don't over-hedge. One sentence of consequence is enough.

**Good:**
> "Delete this project?"
> "This will permanently delete the project and all its files. This can't be undone."
> "Delete" | "Cancel"
**Not:**
> "Are you sure you want to delete this project?"
> "Deleting this project will cause it to be permanently removed from your account and all associated data will be deleted as well. This action cannot be reversed."
> "Yes, delete it" | "No, go back"

---

## Toasts and notifications
Toast messages confirm that an action completed or alert users to a background event.'

**Rules:**
- Sentence case, no period
- State what happened, not what the user did
- Keep it to one line
- Use success/error/info variants consistently

**Good:**
> "Changes saved."
> "File uploaded."
> "Invite sent."
> "Couldn't save. Try again."

**Not:**
> "Great job! Your changes have been saved successfully!"
> "The file upload process completed without errors."
> "Something went wrong."

---

## Tooltips
Tooltips provide brief context for an element that isn't fully explained by its label.

**Rules:**
- Use for clarification, not repetition. Don't tooltip an obvious button
- One sentence maximum
- No period if it's a label extension; use a period for a full sentence
- Don't put required information in a tooltip. Users shouldn't have to hover to do their work

**Good:**
> "Mark this as complete to move it to your archive."
> "Shared with 3 people"
> "Last updated 2 hours ago"

**Not:**
> "Click this button to save your work."
> "This field is required."
> A three-sentence explanation of a feature
