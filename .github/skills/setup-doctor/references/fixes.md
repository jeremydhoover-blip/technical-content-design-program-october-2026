# Common setup fixes

## Node or npm not found
Install the LTS version from https://nodejs.org. Node 20 or later is required. Close and reopen the terminal, then run `node --version`.

## Node version too old
`npm install` or `npm run dev` fails with an "engine" or syntax error. Install Node 20 or later. If you use nvm, run `nvm install 20` then `nvm use 20`.

## Git not found
Install Git from https://git-scm.com. On Mac, running `git --version` in Terminal prompts the install. Reopen the terminal afterward.

## Commit fails: "Please tell me who you are"
Git needs a name and email once per machine.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use the email tied to your GitHub account.

## Push fails: authentication or "Permission denied"
- HTTPS remotes need a sign-in. The simplest path is to sign in to GitHub from VS Code (Accounts menu, bottom left), then retry the push.
- Alternatively install GitHub CLI and run `gh auth login`.
- "Permission denied (publickey)" means the remote is an SSH address. Switch to HTTPS: `git remote set-url origin https://github.com/YOUR-USERNAME/technical-content-design-program-october-2026`

## Port 5173 already in use
Vite picks the next port (5174) and prints it. Open the address it shows. To free the port:
- Mac or Linux: `lsof -i :5173` then `kill PID`
- Windows PowerShell: `Get-NetTCPConnection -LocalPort 5173` then `Stop-Process -Id PID`

## Windows: "running scripts is disabled"
If PowerShell blocks `npm.ps1`, try `npm.cmd install` or `npm.cmd run dev` first. This does not change execution policy. If you choose to allow local scripts for your Windows account, this command changes that account's execution policy:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

## npm install shows lots of warnings
Warnings do not always stop installation, but read them. Engine, deprecated-package, and security warnings can need action. Use the command exit status and error details to identify a failed install; do not dismiss every warning.

## Not a git repository
The folder was probably downloaded as a ZIP. Clone the fork instead: `git clone https://github.com/YOUR-USERNAME/technical-content-design-program-october-2026`

## Changes do not show in the browser
Check that `npm run dev` is still running in its terminal. Save the file again, then refresh the page.
