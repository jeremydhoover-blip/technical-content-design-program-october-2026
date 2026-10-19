# Key Terms

This glossary covers the technical vocabulary used across the Technical Content Designer Program. Entries are written in plain language. You don't need to memorize them. Use this as a reference when you meet a term you don't know.

---

**Repository**  
A folder that tracks changes to its contents over time using git. A repository (or "repo") is more than a folder. It stores the full history of every change ever made, so you can see what changed, when, and why. You fork or clone a repository to get your own copy of it.

**Git**  
A version control tool that runs on your local machine. Git tracks changes to files, lets you create branches, and keeps a history of every committed snapshot. It's the technology that makes collaboration on code (and content) possible without overwriting each other's work.

**GitHub**  
A platform for hosting git repositories online. GitHub adds a web interface, pull requests, issue tracking, and collaboration features on top of git. Git is the technology; GitHub is one place to use it.

**Branch**  
A parallel version of the codebase where you can make changes without affecting the main version. Branches let multiple people work at the same time, or let one person experiment safely. When your changes are ready, you merge the branch back into `main`.

**Commit**  
A saved snapshot of your changes. When you commit, you're creating a record in the repository's history that includes what changed, who changed it, and a message describing why. Commits are how you build an auditable trail of your work.

**Pull request (PR)**  
A request to merge changes from one branch into another. Pull requests are reviewed before they're merged, which makes them the review and approval mechanism in collaborative codebases. When you open a PR, you're saying: "Here's what I changed, please review and merge it."

**Diff**  
The visual comparison between what a file looked like before a change and what it looks like after. A diff highlights added lines (usually in green) and removed lines (usually in red). You see diffs when you open a pull request on GitHub.

**Fork**  
Your personal copy of someone else's repository. When you fork a repo on GitHub, you get a version that belongs to your account. You can make changes to your fork without affecting the original. In this program, you fork the cohort repo so you can build your own content system.

**Merge**  
Combining the changes from one branch into another. When a PR is approved, the changes are merged into the target branch (usually `main`). If two changes conflict, git will ask you to resolve the conflict manually.

**Clone**  
Downloading a remote repository to your local machine. When you `git clone` a repository, you get a full copy of it, including the entire history, on your computer. From there you can run it, edit it, and push changes back.

**Local / Remote**  
Local means on your machine. Remote means on a server, usually GitHub. When you `clone`, you bring a remote repo local. When you `push`, you send local changes back to the remote.

**Terminal / CLI**  
The terminal (or command-line interface) is a text-based interface for giving instructions to your computer. Instead of clicking buttons, you type commands. In this program you'll use the terminal to run git commands, start the local dev server, and run `npm run check` and `npm run evals`.

**node_modules**  
The folder that holds all the third-party code your app depends on. You create it by running `npm install`. It's generated automatically and is always listed in `.gitignore`, so you never commit it to a repository. If you delete it, `npm install` recreates it.

**package.json**  
A configuration file that describes your project: its name, version, scripts (like `npm run dev`), and dependencies (the packages it needs to run). Engineers use it to define and share what tools a project uses.

**Vite**  
The development tool this app is built with. Vite starts a local server for development, watches for file changes and refreshes the browser automatically, and bundles the app for production. You interact with it through `npm run dev`.

**Markdown**  
A plain-text format for writing structured documents. You add formatting with simple characters: `#` for headings, `**` for bold, `-` for bullets. Markdown files have a `.md` extension. The `content/foundations/` files in this repo are Markdown.

**JSON**  
JavaScript Object Notation. A structured format for data. JSON uses key-value pairs, objects (`{}`), and arrays (`[]`) to represent information. The `src/strings.json` file in this repo is JSON. Engineers often use JSON to separate content from code logic.

**YAML**  
Another structured data format, common in configuration files. YAML uses indentation and plain text instead of brackets. You'll see it in `.github/workflows/` files, including this repo's `content-check.yml`. It's sensitive to spacing. Use spaces, not tabs.

**API**  
Application Programming Interface. An API is a defined way for one piece of software to talk to another. When your app fetches data from a server, it's using an API. Understanding what an API is helps you see why structured content formats matter. APIs often send and receive content, not visual layouts.

**MCP (Model Context Protocol)**  
A protocol that allows AI tools to connect to external data sources and services. In practice: an MCP server lets an AI assistant in VS Code read from a database, call an external service, or use a tool you connect. You won't build one in this program. You'll get the same result a simpler way, by giving Copilot your files as context. See [AI-TOOLING.md](AI-TOOLING.md).

**Context window**  
The amount of text a language model can read and process in a single interaction. If you include more text than fits in the context window, the model can't use it. Context windows are measured in tokens. Most current models have large context windows, but being deliberate about what you include still matters.

**Token**  
The unit language models use to measure text. A token is roughly 3–4 characters, or about 75% of a word. A typical sentence is 15–25 tokens. Models have limits on how many tokens they can process at once; this is the context window.

**System prompt**  
Instructions given to a language model that set the rules for how it should respond. System prompts are separate from the user's messages and are typically set by the developer or tool. In content design, you use system prompts to give an AI assistant your voice guidelines, persona context, and rules.

**Eval**  
Short for evaluation. A test you run against AI output to check whether it meets a defined standard. Evals can be manual (you read the output and score it) or automated (a script runs the check). Good evals have specific, testable criteria. In this repo, `npm run evals` runs yours.

**Skill**  
A folder in `.github/skills/` with a `SKILL.md` file that teaches Copilot a repeatable task, such as reviewing copy or writing a PR description. Supported assistants can discover a skill by its description. If your tool does not load it, ask it to read the SKILL.md file directly. A skill can include reference files and scripts.

**Prompt file**  
A saved request in `.github/prompts/` that you run in Copilot Chat by typing `/` and its name. Use one for a task you repeat.

**Agent**  
A chat mode defined in `.github/agents/` with a role and limited tools. In this repo, `coach` guides you and `content-reviewer` reviews without editing.

**Instructions file**  
A file Copilot reads as standing rules. Supported Copilot clients use `.github/copilot-instructions.md` as repo context when enabled. Files in `.github/instructions/` can apply to matching paths. Check the chat references to confirm which instructions were used.

**Script**  
A small program you run from the terminal. In this repo, `npm run check` and `npm run evals` are scripts in `scripts/`.

**CI/CD**  
Continuous Integration / Continuous Deployment. An automated system that runs tests and deploys code when changes are merged to `main`. CI is the testing part; CD is the deployment part. In organizations where content lives in the codebase, content changes go through the same pipeline as code changes.

**Environment**  
The context in which software runs. A development environment (like `npm run dev`) runs locally on your machine. A staging environment is a test version of the live product. A production environment is the real, live product that users interact with. You don't deploy to production from your laptop. CI/CD handles that.
