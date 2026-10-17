# Setup Guide

Follow these steps before Week 1. If something fails, run `npm run doctor` and read the troubleshooting section at the bottom. You can also ask in the UXCC community.

---

## What you need

- **VS Code**: [Download](https://code.visualstudio.com/)
- **Node.js 20 or later**: [Download](https://nodejs.org/) and choose the LTS version
- **Git**: [Download](https://git-scm.com/)
  - Mac: run `git --version` in Terminal. If Git is not installed, macOS prompts you to install it.
  - Windows: download Git for Windows from the link above.
- **A GitHub account**: [Sign up](https://github.com/) if you do not have one
- **GitHub Copilot**: needed in Week 3. See the section below. Free access is enough.

---

## How to fork the repo

1. Go to the cohort repository on GitHub. Your instructor shares the URL.
2. Click **Fork** in the top-right corner.
3. Keep the defaults and click **Create fork**.

You now have your own copy at `github.com/YOUR-USERNAME/REPO-NAME`. You work in your fork. Your changes never touch the original.

---

## How to clone your fork

Open a terminal. In VS Code, use **Terminal > New Terminal**.

Go to the folder where you want the project:

```bash
cd ~/Desktop
```

On Windows PowerShell, `cd $HOME\Desktop` does the same.

Clone your fork, replacing the username and repo name:

```bash
git clone https://github.com/YOUR-USERNAME/REPO-NAME
cd REPO-NAME
```

Open the folder in VS Code: **File > Open Folder**, then choose the repo folder.

---

## Tell Git who you are

Git stamps your name on every commit. Set it once:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use the email on your GitHub account.

---

## Sign in to GitHub

Pushing needs a sign-in. The easiest route is VS Code: click the Accounts icon in the bottom-left, choose **Sign in with GitHub**, and follow the browser prompt. When you push for the first time, Git uses that sign-in.

Another option is GitHub CLI: install it from [cli.github.com](https://cli.github.com/), then run `gh auth login`.

---

## How to install dependencies

Inside the repo folder:

```bash
npm install
```

This installs what the app needs and creates a `node_modules/` folder. That is normal. It takes under a minute.

---

## Check your setup

```bash
npm run doctor
```

It checks Node, Git, your Git name and email, whether the folder is a git repository, and whether dependencies are installed. Each line starts with `[ok]`, `[warn]`, or `[fail]`. Fix anything marked `[fail]`.

---

## How to run the app

```bash
npm run dev
```

You should see something like:

```
VITE v5.x.x  ready in 300ms

  Local:   http://localhost:5173/
```

Open [http://localhost:5173](http://localhost:5173). To stop the server, press `Ctrl+C` in the terminal.

---

## How to verify everything works

1. The app loads at [http://localhost:5173](http://localhost:5173)
2. You can open Home, ContentLab, Playground, Exercises, and Resources without errors
3. ContentLab lists your five foundations files and the Luma worked example
4. `npm run doctor` shows no `[fail]` lines
5. `git status` runs without errors

---

## Set up GitHub Copilot (Week 3)

1. In VS Code, open the Extensions view and install **GitHub Copilot** and **GitHub Copilot Chat**.
2. Sign in with the same GitHub account when VS Code asks.
3. Open Copilot Chat: **View > Chat**.
4. Type `/` to see this repo's prompts, such as `/review-copy`.

If you have no Copilot plan, the free tier works for this program. Ask your instructor if you hit a limit. See [AI-TOOLING.md](AI-TOOLING.md) for what the repo's skills, prompts, and agents do.

---

## Common problems and fixes

### Port already in use
Vite tries the next port, such as 5174, and prints it. Open the address it shows.

To free port 5173:
- Mac or Linux: `lsof -i :5173`, then `kill PID`
- Windows PowerShell: `Get-NetTCPConnection -LocalPort 5173`, then `Stop-Process -Id PID`

### Node not found
1. Install Node.js from [nodejs.org](https://nodejs.org)
2. Close and reopen your terminal
3. Run `node --version`. You need `v20` or higher.

### Windows: "running scripts is disabled"
Run this once in PowerShell, then reopen the terminal:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### Permission errors on Mac during npm install
Do not use `sudo npm install`. Follow the [npm guide on fixing permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

### "Please tell me who you are" when committing
Run the two `git config` commands in the section above.

### Push is rejected or asks for a password
Sign in to GitHub from VS Code, or run `gh auth login`. Check that the remote is your fork: `git remote -v`.

### Changes do not show in the browser
Check that `npm run dev` is still running. Save the file again. Refresh if the page looks stuck.

### Still stuck
In Copilot Chat, ask: "Use the setup-doctor skill. Here is my error." Then paste the error.
