# Week 1: Inside the System

This session is about orientation. You're going to fork a real repository, run it locally, and explore how the pieces connect. By the end, you'll have the app running on your machine and a sense of where content lives in a codebase.

---

## In session

### 1. Fork the repo

Your instructor will share the repo URL at the start of the session. Go to that URL on GitHub and click **Fork** in the top-right corner. This creates your own copy of the repo under your GitHub account.

### 2. Clone your fork

Open your terminal. Navigate to wherever you keep projects on your machine (your Desktop, a `projects/` folder, or anywhere that makes sense). Then run:

```bash
git clone https://github.com/YOUR-USERNAME/technical-content-design-program-october-2026
```

Replace `YOUR-USERNAME` with your GitHub username and `technical-content-design-program-october-2026` with the name of the repo. This downloads your fork to your local machine.

### 3. Open the folder in VS Code

In VS Code: **File → Open Folder** → select the folder you just cloned.

You should see the repo's file structure in the Explorer panel on the left.

### 4. Install dependencies and launch the app

In the VS Code terminal (or your system terminal, in the repo folder), run:

```bash
npm install
```

This installs the packages the app needs to run. It may take a minute. A `node_modules/` folder appears. That's expected.

Check that your setup is healthy:

```bash
npm run doctor
```

Each line starts with `[ok]`, `[warn]`, or `[fail]`. Fix anything marked `[fail]` before you go on. If you need help, ask Copilot Chat to "use the setup-doctor skill."

Then run:

```bash
npm run dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173). You should see the app.

### 5. Explore the app

Click through the navigation: **Home, ContentLab, Playground, Exercises, Resources.** Take 5 minutes to read the copy. What do you notice about how information is organized? What's labeled clearly? What's confusing?

Open **ContentLab**. You'll see your five foundations files, each marked with how many placeholders are left, and a worked example for a fictional product called Luma. Read one Luma file to see what finished looks like.

Then go back to VS Code and explore the repo:

- Open `README.md`
- Browse the `content/foundations/` folder
- Look at the `exercises/` folder
- Browse `.github/skills/`. Each folder is a task Copilot can do for you. You'll use them from Week 2.
- Find `src/strings.json`

Open `src/strings.json`. Can you find a piece of text from the app in this file? Match one label you saw in the UI to a key in the JSON.

### 6. Create a branch

In your terminal, run:

```bash
git checkout -b your-name/week-1
```

Replace `your-name` with your actual name (e.g., `maya-chen/week-1`). This creates a new branch and switches to it. You're now working on a branch, not directly on `main`.

You won't commit anything this week. You learn to commit in Week 2.

**Done when:** `npm run doctor` shows no `[fail]` lines, the app runs, you can match one UI label to a key in `src/strings.json`, and `git branch` shows your branch.

---

## After this session (before Week 2)

- Open `content/foundations/voice-and-tone.md` in VS Code. Read through the full file, including the `> **Guide:**` blocks. They tell you what each section needs.
- Replace the `[Your product name]` placeholder with a product name you choose. It can be real or fictional. Pick something you find interesting.
- Fill in at least the "The voice" section with 3–4 voice attributes for your chosen product. Write them in your own words, not copied from the template or from the Luma example.
- Save the file. Watch ContentLab update. The placeholder count for that file goes down as you fill it in.

Leave your changes uncommitted. Come to Week 2 ready to talk about what you wrote.

**Done when:** `voice-and-tone.md` has your product name and at least three voice attributes.
