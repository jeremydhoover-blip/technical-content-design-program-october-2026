# Voice and Tone: Luma

> **Worked example.** This is a finished file for Luma, a fictional team workflow app. Read it to see what done looks like. Write your own for your product instead of copying this one.

This file defines how Luma speaks to users. It describes the personality behind every interface string: buttons, labels, empty states, errors, confirmations. Use this file when you're writing new copy, reviewing existing strings, or evaluating whether AI-generated content fits the product.

---

## The voice

The voice is who Luma is, regardless of context. It stays consistent.

**Clear, not clever.** Every string should be immediately understandable. We don't use wordplay, jargon, or clever phrasing when a plain statement works better. Users are here to do something. Help them do it.

**Direct, not abrupt.** We get to the point without being cold. We skip throat-clearing ("Please be aware that...") and say what needs to be said.

**Human, not casual.** We write like a knowledgeable person talking to someone they respect. Not robotic, not over-friendly. We don't use slang or emoji in the UI.

**Confident, not arrogant.** We make clear recommendations and give users enough context to act. We don't hedge unnecessarily ("you might want to try...") or overstate ("the most powerful tool you'll ever use").

**Helpful on the bad days.** Error messages and failure states matter as much as onboarding copy. When something goes wrong, we explain what happened, why it matters, and what to do next.

### What the voice is NOT

- Not corporate or stiff ("Please utilize the available functionality")
- Not overly friendly or emoji-heavy ("Great job! 🎉 You're crushing it!")
- Not vague ("Something happened. Please try again.")
- Not condescending ("Don't worry, this is easy!")
- Not passive ("The file could not be found")

---

## The tone by context

The tone shifts based on where the user is and what they're doing. Same voice, different register.

### Onboarding

Users are oriented and curious. The tone is welcoming and purposeful, focused on helping them understand what they're looking at and what to do first.

**Good:**
> "Connect your account to start. It takes about 30 seconds."

> "Your workspace is empty. Add your first project to get started."

**Not:**
> "Welcome! We're so excited to have you here. Let's get started on this amazing journey together!"

> "No projects found. You haven't created any projects yet."

### Empty states

Empty states are transitions, not failures. The tone is matter-of-fact and action-oriented. Tell users what this space is for and give them a way to fill it.

**Good:**
> "No results yet. Run your first search to see what turns up."

> "Nothing here. Add items to this list to track your work."

**Not:**
> "Wow, it's empty in here! Time to get busy."

> "No data available."

### Errors

Something went wrong. The tone is calm and practical. Don't apologize excessively. Acknowledge the problem, tell the user what happened (if known), and give them a clear path forward.

**Good:**
> "We couldn't save your changes. Check your connection and try again."

> "That file type isn't supported. Upload a .pdf or .docx file."

> "Session expired. Sign in again to continue."

**Not:**
> "Oops! Something went wrong. We're really sorry about that!"

> "Error 403."

> "An unexpected error occurred."

### Confirmations

The user just did something. The tone is brief and affirming. Confirm the action without over-celebrating it.

**Good:**
> "Changes saved."

> "Project deleted."

> "Invite sent to alex@example.com."

**Not:**
> "Woohoo! Your changes have been successfully saved to the database!"

> "The deletion process has been completed successfully."

---

## Anti-patterns

Avoid these in all copy for Luma:

- **Passive voice in errors**: "The file could not be uploaded" → "We couldn't upload that file."
- **Vague system messages**: "Something went wrong" → explain what went wrong.
- **Excessive apologies**: "We're so sorry, but..." → state the issue directly.
- **Filler openers**: "Please note that..." / "It is important to..." → cut and start with the point.
- **Unnecessary hedging**: "You may want to consider..." → say what to do.
- **Inconsistent terminology**: pick one word for each concept and use it everywhere. If it's "project," it's always "project," never "workspace," "board," or "item."
- **Overcapitalized UI labels**: buttons and labels are sentence case, not Title Case.
