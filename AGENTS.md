# AGENTS.md

Guidance for AI coding agents working in this repo. Humans: see `README.md` and `CONTRIBUTING.md`.

## What this repo is

The working repo for the UX Content Collective Technical Content Designer Program. Participants are content designers. They fork this repo and build a content system for their own product over four weeks. The app, ContentLab, is a Vite and vanilla JavaScript viewer for that system.

## Structure

```
content/foundations/     Participant's 5 content system files
content/instructions.md  Participant's system prompt for their product
content/evals.json       Participant's eval criteria and samples
content/examples/luma/   Worked example. Read for depth, never copy wording
src/strings.json         UI copy for ContentLab. Edit values only
src/main.js, src/lib/    App code. Do not change unless asked
scripts/                 doctor, check, check:tooling, evals, prompt
exercises/week-N/        Weekly task cards
docs/, checklists/       Reference material
.github/                 Skills, agents, prompts, instructions, CI
```

## Learning workflow

We recommend VS Code with GitHub Copilot from Week 1 and use it for the demonstrations. You can use another coding assistant if you prefer. Check that it can read your repo files and follow the same tasks.

Participants use their chosen coding assistant to read, edit, generate, and revise content in the repo. The app displays content, assembled context, exercises, resources, and eval results. It does not host an AI model. Do not add API setup or a local model requirement. Save generated test copy as samples in `content/evals.json`; run `npm run evals` and inspect the same results in Evaluations. Copilot-specific commands are optional conveniences, not prerequisites.

## Commands

```
npm install
npm run dev            # http://localhost:5173
npm run doctor         # environment check
npm run check          # validate content and strings
npm run check:tooling  # validate AI tooling and documentation references
npm run check:strict   # also fail on placeholders
npm run evals          # run content/evals.json
npm run prompt         # preview assembled AI context
npm run build
```

Requires Node 20 or later.

## Rules

- Do not rename, delete, or move keys in `src/strings.json`. Only values change.
- Do not complete exercises for the participant. When explicitly asked for a draft, label it as a draft for them to revise.
- These participant limits do not block instructor-requested maintenance of docs, exercises, or tooling.
- Do not reveal `exercises/week-N/hints.md` unless asked.
- Treat `[placeholders]` and `> **Guide:**` blocks in `content/foundations/` as unfinished.
- Do not commit or push unless asked. Do not use `--force`, `--no-verify`, or `reset --hard` without explaining and getting a yes.
- Run `npm run check` after changing a content file or `src/strings.json`.
- Run `npm run evals` after changing `content/evals.json`.
- Run `npm run check:tooling` after changing AI tooling or its documentation.
- For Copilot-specific workflows, see `.github/copilot-instructions.md`. Other agents must not assume they automatically load `.github/skills/`, scoped instructions, prompts, or custom agents. Read the relevant files explicitly when needed.

## Style

Active voice, second person, no filler. No em-dashes as asides. Plain language, since the reader is not an engineer.

## More

Skills, prompts, and agents are described in `docs/AI-TOOLING.md`.
