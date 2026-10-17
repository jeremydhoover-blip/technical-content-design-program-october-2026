# Prompt quality checklist

- [ ] The first lines say what the product is and who uses it
- [ ] The most important rules come first
- [ ] Every rule is specific and checkable ("Use second person" not "Be friendly")
- [ ] No two rules conflict. If they could, the file says which one wins
- [ ] A "Never" list names the 2 or 3 worst failures
- [ ] The file points to `content/foundations/` instead of copying it
- [ ] The output format tells the assistant what to return and in what shape
- [ ] Under 300 words
- [ ] No placeholders left
- [ ] Tested: compare the same request in separate chats with and without product context, record the results, and check them against the rules. Identical output is a valid result to investigate

## Common problems

**Too vague.** "Write in our brand voice." Replace with the three voice attributes and one rule for each.

**Too long.** If it repeats the foundations files, cut it. Link to them.

**Buried rule.** If the single most important rule is in paragraph four, move it to the top.

**Conflict.** "Be concise" plus "Always explain your reasoning in detail." Pick one, or say when each applies.
