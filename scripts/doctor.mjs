// npm run doctor
// Checks that your machine is ready for the program and tells you how to fix anything that is not.
import { execSync } from 'node:child_process';
import { exists, green, yellow, red, dim, bold } from './_util.mjs';

const results = [];
const add = (level, name, detail, fix) => results.push({ level, name, detail, fix });

function run(cmd) {
  try {
    return execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'], windowsHide: true }).toString().trim();
  } catch {
    return null;
  }
}

// Node
const major = Number(process.versions.node.split('.')[0]);
if (major >= 20) add('ok', 'Node.js', `v${process.versions.node}`);
else add('fail', 'Node.js', `v${process.versions.node} is too old`, 'Install the LTS version from https://nodejs.org (Node 20 or later), then reopen your terminal.');

// npm
const npm = run('npm --version');
if (npm) add('ok', 'npm', `v${npm}`);
else add('fail', 'npm', 'not found', 'Reinstall Node.js from https://nodejs.org. npm comes with it.');

// git
const git = run('git --version');
if (git) add('ok', 'Git', git.replace('git version ', 'v'));
else add('fail', 'Git', 'not found', 'Install Git from https://git-scm.com, then reopen your terminal.');

if (git) {
  const name = run('git config user.name');
  const email = run('git config user.email');
  if (name && email) add('ok', 'Git identity', `${name} <${email}>`);
  else add('fail', 'Git identity', 'name or email not set', 'Run: git config --global user.name "Your Name"   and   git config --global user.email "you@example.com"');

  const inRepo = run('git rev-parse --is-inside-work-tree') === 'true';
  if (!inRepo) {
    add('fail', 'Git repository', 'this folder is not a git repository', 'Clone your fork with git clone, then open that folder.');
  } else {
    const origin = run('git remote get-url origin');
    if (origin) add('ok', 'Remote (origin)', origin);
    else add('warn', 'Remote (origin)', 'no remote named origin', 'You may have downloaded a ZIP instead of cloning. Clone your fork instead.');

    const branch = run('git branch --show-current');
    if (branch === 'main' || branch === 'master') add('warn', 'Branch', `you are on ${branch}`, 'Create a branch before editing: git checkout -b your-name/week-1');
    else if (branch) add('ok', 'Branch', branch);
  }
}

// Dependencies
if (exists('node_modules')) add('ok', 'Dependencies', 'node_modules found');
else add('fail', 'Dependencies', 'node_modules not found', 'Run: npm install');

// Report
const mark = { ok: green('[ok]  '), warn: yellow('[warn]'), fail: red('[fail]') };
console.log(bold('\nProgram setup check\n'));
for (const r of results) {
  console.log(`${mark[r.level]} ${r.name.padEnd(16)} ${dim(r.detail)}`);
  if (r.fix) console.log(`       ${r.fix}`);
}
const fails = results.filter(r => r.level === 'fail').length;
const warns = results.filter(r => r.level === 'warn').length;
console.log('');
if (fails) console.log(red(`${fails} problem${fails > 1 ? 's' : ''} to fix before you continue.`));
else if (warns) console.log(yellow('Ready, with notes above.'));
else console.log(green('Everything is ready. Run npm run dev to start the app.'));
console.log('');
process.exit(fails ? 1 : 0);
