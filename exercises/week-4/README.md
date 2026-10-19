# Week 4: Proving It Works

You've built a content system. Now you're going to show that it works, and think about what "works" actually means.

---

## In session

Use your chosen coding environment for edits and AI work. The app displays the files you save. Copilot commands in this card are optional examples; if your assistant does not support them, give it the same task and the relevant files directly.

### 1. Evals as a content design concept

An eval (short for evaluation) is a test you run against AI output to check whether it meets a standard. In engineering contexts, evals are often automated: a script runs a prompt, gets a response, and checks it against a rubric.

For content designers, the concept matters even without the automation. The question is: how do you know your content system is producing good output? What would "good" look like? How would you check?

Evals force you to be specific. "Write in our voice" is not an eval criterion. "The output uses second person, avoids exclamation points, and keeps button labels under 4 words" is.

This repo has a working eval runner. Open `content/evals.json`. It holds criteria (the rules) and samples (the copy to test). Run it:

```bash
npm run evals
```

Samples marked `"expect": "fail"` are deliberately bad. They prove your criteria catch the problem. You can also test one string at a time:

```bash
npm run evals -- --text "Save your work" --component button
```

Open **Evaluations**. Use **Evaluate your content** for a single string, review **Your eval criteria**, or expand **Test cases and results** to inspect the samples saved in your file. Expand **Technical details** on a criterion to inspect its JSON definition.

### 2. What to evaluate

Three dimensions worth checking for any AI-generated copy:

**Voice match:** Does the output sound like your product? Does it use the attributes you defined? Are there words or patterns that clearly violate your guidelines?

**Rule compliance:** Does it follow your grammar and style rules? Your component patterns? Does it avoid the anti-patterns you listed?

**Persona fit:** Is this copy appropriate for the user it's targeting? Would your first persona find it clear? Would your second find it condescending?

### 3. CI/CD: a brief orientation

CI/CD stands for Continuous Integration / Continuous Deployment. CI runs automated checks on changes. CD automates delivery or deployment. This repo checks and builds your work; it does not deploy a live product.

Where content fits: in some organizations, content changes go through the same CI/CD pipeline as code. A PR that updates a UI string triggers a build, automated checks run, and if everything passes, the change deploys.

You've already seen this. Open `.github/workflows/content-check.yml`. On every pull request it runs `npm run check:tooling`, `npm run check`, `npm run evals`, and `npm run build`. Your evals are now part of CI. An unexpected sample result makes the check fail. A deliberately bad sample marked `"expect": "fail"` counts as working when at least one applicable criterion catches it.

On a fork, GitHub may ask you to enable Actions the first time. Click **Enable workflows** on the Actions tab.

The workflow you've been practicing, branch, PR, review, merge, is the same workflow that ships products. Your content changes fit into that system.

### 4. Final presentations

Each participant walks through their fork. You have about 5 minutes. Show:
- Your `content/foundations/` files and what you built
- One criterion in Evaluations and a test case showing what it catches
- One change you made that you're proud of
- What changed from Week 1 to Week 4: what do you understand now that you didn't before?
- What you'd do next if this were a real product

---

## Before or during the session: write your evals

In `content/evals.json`, replace the example criteria with ones for your product. Write at least three.

1. Pick three rules from your content system, such as an anti-pattern from `voice-and-tone.md` or a length limit from `component-patterns.md`.
2. Turn each into a criterion that passes or fails with no judgment call. The `write-evals` skill coaches you.
3. Add samples: one good and one deliberately bad per criterion. Mark bad samples `"expect": "fail"`.
4. Run `npm run evals` until every sample behaves as expected.
5. Ask your coding assistant to read your instructions and write copy for one component. Save that copy as a sample in `content/evals.json`, review the change, and run `npm run evals`. Inspect the results in Evaluations. Ask your assistant to revise the copy using the failed criteria and your feedback, then save and check it again. Keep the criteria unless you decide the rule itself needs to change.

---

## After this session

Run the strict check, which also fails on leftover placeholders:

```bash
npm run check:strict
```

Fix what it finds. Ask your assistant to review the diff and run the checks before the final PR. In supported Copilot sessions, use `/prep-pr`. Commit, push, open the PR on your fork, wait for the checks to pass, and merge.

**Done when:** `npm run check:strict` shows no errors, `npm run evals` passes, and your final PR is merged with green checks.
