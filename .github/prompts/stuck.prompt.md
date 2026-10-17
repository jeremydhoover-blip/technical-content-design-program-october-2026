---
description: "Name which week you are in and what you are stuck on. Returns the next small step, without doing the exercise for you."
agent: ask
tools: ['search', 'read']
---

I am in week ${input:week:1, 2, 3, or 4}. I am stuck on: ${input:problem}

Use the week number provided above to read the matching `exercises/week-N/README.md`. Accept only weeks 1 through 4. Tell me:

1. Which step of the task I am on
2. What that step is asking, in plain language
3. The one next thing to try

Do not give me the hints file contents unless I ask for a hint. Do not do the step for me.
