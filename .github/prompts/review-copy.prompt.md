---
description: "Quick voice and rules check on selected copy. Use when you want fast feedback on a string, a rule, or a paragraph."
agent: agent
tools: ['search', 'read', 'execute/runInTerminal']
---

Review the selected copy against my content system.

Copy:

```
${selection}
```

Use the `copy-review` skill. Run the evals on it first. If I did not say which component it is for, assume the most likely one and say which.

Keep the response under 120 words.
