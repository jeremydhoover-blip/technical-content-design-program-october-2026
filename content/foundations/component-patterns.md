# Component patterns: Insight Timer


Use this file when writing a new string or reviewing an existing one for consistency.

---

## Buttons

Buttons tell users what will happen when they click.

**Rules:**
- CTA buttons should use the imperative verb form
- Menu buttons, or other navigational elements, may be nouns or noun phrases
- Buttons should be 4 words maximum
- Use title case, but keep common words like articles, prepositions and conjunctions in lowercase

**Primary button:** 
- Get the App / Browse / Add to Calendar

**Secondary button:** 
- View Profile / Show More

**Destructive button:** 
- Cancel / Stop Recording / End Session
- Always follow destructive buttons with a separate modal/pop-up requesting user confirmation

---

## Labels and placeholder text

**Rules:**
- Use title case for navigation labels that are 6 words or under
- Use sentence case for labels longer than 7 words
- Keep common words like articles, prepositions and conjunctions in lowercase regardless of length
- Labels may have multiple grammatical structures: nouns, noun phrases, phrasal verbs, sentence fragments
- Placeholder text in empty fields should provide instructions. Start with a verb and then the field label. For example: "Enter password"
- Labels may use contextual information pulled from other elements of the page

**Good:**
> `More Meditations from Krista Neff`

**Not:**
> `More Meditations from this Teacher`

---

## Error messages

### Inline field errors

**Rules:**
- Use the active voice 
- Avoid phrasing that places blame on the user for causing the error
- Use sentence case
- Tell customers what action they need to take to resolve the error, if possible

**Good:**
> "This password is incorrect. Please try again."



**Not:**
> "Invalid password"


### System errors

**Rules:**
- Use the active voice 
- Avoid phrasing that places blame on the user for causing the error
- Use sentence case
- Tell users what action they need to take to resolve the error
- Use concrete language explaining the nature of the error
- Don't apologize

**Good:**
>"This recording is no longer available. You can search our library to find a new one on the same topic."
>"This retreat is full and can't accept any more registrations."

**Not:**
> "This recording has been removed."
> "No more registrations allowed."

---

## Empty states

Empty states appear when a section has no content yet, or when a search or filter returns nothing.


**Rules:**
- Tell the user what this space is for
- Tell users what action they need to take next
- Don't over-explain or over-celebrate
- Match the tone to the context

**Good (first time):**
> "Welcome to Insight Timer. What intention do you want to set today?"

**Good (after a search or filter):**
>"We couldn't find any recordings with this search term. Please start a new search."

**Not:**
> "No recordings found."

---

## Confirmation dialogs

**Rules:**
- Avoid using the phrase "are you sure?"
- Restate what action the customer is attempting to take
- If there are consequences to the user for taking this action, state them clearly, but don't resort to fear-mongering
- Ensure the buttons state two distinct and opposing options

**Good:**
> **Do you want to cancel your retreat reservation?**
> If you cancel this reservation, the host will keep the deposit you paid when you first reserved your spot.
> `Cancel my reservation` `Keep my reservation`

**Not:**
> **Are you sure about cancelling your retreat reservation?**
> If you cancel this reservation, you will forfeit your deposit.
> `Cancel` `Go Back`

---

## Toasts and notifications

**Rules:**
- Inform people if the action they took was successful or unsuccessful
- State clearly when a scheduled event is about to start, and include the name of either the course or the teacher

**Good:**
> "Your meditation course with Serena starts in 30 minutes."

**Not:**
> "Your meditation course starts soon."

---

## Tooltips

Not applicable
