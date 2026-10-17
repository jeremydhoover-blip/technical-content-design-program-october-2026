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
scripts/                 doctor, check, evals, prompt
exercises/week-N/        Weekly task cards
docs/, checklists/       Reference material
.github/                 Skills, agents, prompts, instructions, CI
```

## Commands

```
npm install
npm run dev            # http://localhost:5173
npm run doctor         # environment check
npm run check          # validate content and strings
npm run check:strict   # also fail on placeholders
npm run evals          # run content/evals.json
npm run prompt         # preview assembled AI context
npm run build
```

Requires Node 20 or later.

## Rules

- Do not rename, delete, or move keys in `src/strings.json`. Only values change.
- Do not complete exercises for the participant.
- Do not reveal `exercises/week-N/hints.md` unless asked.
- Treat `[placeholders]` and `> **Guide:**` blocks in `content/foundations/` as unfinished.
- Do not commit or push unless asked. Do not use `--force`, `--no-verify`, or `reset --hard` without explaining and getting a yes.
- Run `npm run check` after changing a content file or `src/strings.json`.
- Run `npm run evals` after changing `content/evals.json`.

## Style

Active voice, second person, no filler. No em-dashes as asides. Plain language, since the reader is not an engineer.

## More

Skills, prompts, and agents are described in `docs/AI-TOOLING.md`.
