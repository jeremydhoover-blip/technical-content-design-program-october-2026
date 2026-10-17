# Copilot instructions: UX Content Collective Technical Content Designer Program

## What this repo is

The working repo for the October 2026 **UX Content Collective Technical Content Designer Program**. It is a 4-week program that teaches content designers to work inside a repository.

Each participant builds a content system for their own product across the four weeks. The app, **ContentLab**, is a Vite and vanilla JavaScript viewer that renders that system and lets participants test it. A worked example for a fictional product, Luma, is in `content/examples/luma/`.

## Where things are

| Path | What it is | Who edits it |
|---|---|---|
| `content/foundations/` | The participant's 5 content system files | Participant |
| `content/instructions.md` | The participant's system prompt for their product | Participant |
| `content/evals.json` | The participant's eval criteria and samples | Participant |
| `content/examples/luma/` | Worked example. Read for depth, never copy wording | Nobody |
| `src/strings.json` | UI copy for ContentLab. Values only | Participant |
| `src/`, `scripts/`, `index.html` | App code and scripts | Engineering |
| `exercises/week-N/` | Weekly task cards | Instructor |
| `.github/` | Skills, agents, prompts, instructions, CI | Instructor |

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the app at http://localhost:5173 |
| `npm run doctor` | Check Node, Git, and project setup |
| `npm run check` | Validate content files and strings. `check:strict` also fails on placeholders |
| `npm run evals` | Run `content/evals.json`. Add `-- --text "..." --component button` to test one string |
| `npm run prompt` | Preview the assembled AI context and its token size |
| `npm run build` | Build the app |

## How to help participants

- Participants are content designers, not engineers. Use plain language. Explain the idea, then the command.
- Prefer the repo's skills and scripts over improvising. See the table below.
- Read the participant's files before suggesting changes. Treat `[placeholders]` as unfinished.
- Review and question. Do not write the participant's content system for them unless they ask for a draft, and label drafts as drafts.

## Do not

- Complete exercises for participants
- Reveal `exercises/week-N/hints.md` unless the participant asks for a hint
- Rename, delete, or move keys in `src/strings.json`
- Rewrite `src/main.js` or `src/lib/` unless explicitly asked
- Run destructive git commands (`reset --hard`, `--force`, deleting branches) without explaining and getting a yes
- Commit or push on behalf of the participant unless asked

## Skills, agents, and prompts

| Name | Type | Use when |
|---|---|---|
| `setup-doctor` | Skill | Install, start, or git problems |
| `edit-strings` | Skill | Changing text in `src/strings.json` |
| `commit-message` | Skill | Committing and pushing |
| `write-pr-description` | Skill | Opening a pull request |
| `content-writer` | Skill | Writing copy with the participant's rules |
| `copy-review` | Skill | Checking copy against the rules |
| `content-audit` | Skill | Finding gaps in the content system |
| `build-system-prompt` | Skill | Writing `content/instructions.md` |
| `write-evals` | Skill | Writing criteria in `content/evals.json` |
| `coach` | Agent | Guidance through a week without giving away the answer |
| `content-reviewer` | Agent | Read-only review of copy, files, or a diff |
| `/review-copy` | Prompt | Quick check of selected copy |
| `/explain-content-file` | Prompt | What a foundations file is for |
| `/prep-pr` | Prompt | Checks and description before a PR |
| `/test-copy` | Prompt | Compare AI output with and without the content system |
| `/stuck` | Prompt | Next step for the current week |

See `docs/AI-TOOLING.md` for how these work.

## Workflow

Fork the repo. Clone the fork. Work on a branch named `your-name/week-N`. Open a pull request on your own fork. CI runs `npm run check`, `npm run evals`, and `npm run build`. See `CONTRIBUTING.md`.

## Writing style for this repo

- Active voice, second person, no filler
- No em-dashes as asides. Use commas or a new sentence
- Short paragraphs, specific language
