# Week 1: Hints

Use these if you get stuck. They're organized by the most common points where participants run into trouble.

---

## Terminal navigation

If you're not sure where you are in your terminal, run `pwd` (print working directory). It shows your current location as a full path.

To move into a folder: `cd folder-name`  
To move up one level: `cd ..`  
To list what's in the current folder: `ls` (Mac/Linux) or `dir` (Windows)

---

## git clone errors

**"Permission denied (publickey)"**: This usually means your SSH key isn't set up. The simplest fix: use the HTTPS clone URL instead of SSH. On GitHub, when you click the green **Code** button, switch from "SSH" to "HTTPS" and copy that URL.

**"Repository not found"**: Double-check the URL. Make sure you forked the repo first and are cloning *your fork* (under your username), not the original.

**Clone seems to hang**: Interrupt it with `Ctrl+C` and try again. If it keeps hanging, check your internet connection.

---

## npm install errors

**"node: command not found"** or **"npm: command not found"**: Node.js isn't installed or isn't on your PATH. Install it from [nodejs.org](https://nodejs.org) (choose the LTS version). Close and reopen your terminal after installing.

**Permission errors on Mac**: Try running the command without `sudo`. If that doesn't work, check the SETUP.md doc in this repo under Resources.

**Lots of warnings**: npm warnings (lines starting with `WARN`) are usually fine. Errors (lines starting with `ERR!`) need attention. Read the last error line first. It's usually the root cause.

**Not sure what's wrong?** Run `npm run doctor`. It checks Node, Git, and your install, and tells you what to fix. You can also ask Copilot Chat to use the `setup-doctor` skill.

---

## Finding strings.json

The file is at `src/strings.json`. In VS Code, you can open it with `Ctrl+P` (Windows) or `Cmd+P` (Mac), then type `strings.json`.

Once it's open, look for keys that match text you saw in the app. For example: the text on the Home page cards comes from the `dashboard` object. The navigation labels come from the `nav` object.

---

## Understanding the app structure

The app has two main pieces:

1. **`src/main.js`**: the JavaScript that controls what gets rendered and when. This is the "logic."
2. **`content/foundations/`**: the Markdown files you'll edit. These are the "content."

The app reads your Markdown files and renders them in ContentLab. When you edit a file in `content/foundations/` and save, the browser refreshes automatically while `npm run dev` is running.

---

## Branching basics

**Why branch?** A branch is a separate copy of the codebase where you can make changes without affecting `main`. In a team setting, `main` is the stable version everyone shares. You work on a branch and merge your changes when they're ready.

**Check which branch you're on:** `git branch`. Your current branch has an asterisk next to it.

**Switch to an existing branch:** `git checkout branch-name`

**Create a new branch and switch to it:** `git checkout -b your-name/week-1`

If you accidentally committed to `main`, don't panic. Ask your instructor. It's fixable.
