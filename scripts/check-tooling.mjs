// Validate this repo's deliberately simple, single-line frontmatter and references.
// Live Copilot discovery and behavior must still be checked in VS Code.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function checkTooling(root) {
  const errors = [];
  const read = file => readFileSync(resolve(root, file), 'utf8').replace(/\r\n/g, '\n');
  const fail = (file, message) => errors.push(`${file}: ${message}`);
  const files = folder => readdirSync(resolve(root, folder), { withFileTypes: true }).flatMap(entry => {
    const path = `${folder}/${entry.name}`;
    return entry.isDirectory() ? files(path) : [path];
  });
  const github = files('.github');
  const skills = github.filter(f => f.endsWith('/SKILL.md'));
  const prompts = github.filter(f => f.endsWith('.prompt.md'));
  const agents = github.filter(f => f.endsWith('.agent.md'));
  const instructions = github.filter(f => f.endsWith('.instructions.md'));
  const packageScripts = JSON.parse(read('package.json')).scripts;
  const inventories = ['docs/AI-TOOLING.md', '.github/copilot-instructions.md'];
  const metadata = new Map();

  for (const file of [...skills, ...prompts, ...agents, ...instructions]) {
    const match = read(file).match(/^---\n([\s\S]*?)\n---\n/);
    if (!match) { fail(file, 'Missing frontmatter.'); continue; }
    const fields = {};
    for (const line of match[1].split('\n')) {
      const field = line.match(/^([\w-]+):\s*(.+)$/);
      if (!field) { fail(file, 'Use single-line frontmatter fields in this repo.'); continue; }
      if (field[1] in fields) fail(file, `Duplicate field ${field[1]}.`);
      let value = field[2];
      try {
        if (value.startsWith('"')) value = JSON.parse(value);
        else if (value.startsWith('[')) {
          // Tool arrays here contain only quoted identifiers, never YAML expressions.
          if (!/^\[\s*(?:'[-\w/.*]+'|"[-\w/.*]+")?(?:\s*,\s*(?:'[-\w/.*]+'|"[-\w/.*]+"))*\s*\]$/.test(value)) throw Error();
          value = JSON.parse(value.replace(/'/g, '"'));
        }
      } catch { fail(file, `Invalid ${field[1]} value.`); }
      fields[field[1]] = value;
    }
    metadata.set(file, fields);
    if (skills.includes(file)) {
      const folder = dirname(file).split(/[\\/]/).at(-1);
      if (fields.name !== folder || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fields.name) || fields.name.length > 64) fail(file, 'Skill name must match its folder and use lowercase letters, numbers, and hyphens.');
      if (typeof fields.description !== 'string' || !fields.description.trim() || fields.description.length > 1024) fail(file, 'Skill needs a description of 1 to 1024 characters.');
    } else if (!instructions.includes(file) && !fields.description) fail(file, 'Missing description.');
    if (instructions.includes(file) && !fields.applyTo) fail(file, 'Missing applyTo scope.');
    if (prompts.includes(file) || agents.includes(file)) {
      if (!Array.isArray(fields.tools)) fail(file, 'Declare the tools this workflow needs.');
      else if (!fields.tools.includes('read')) fail(file, 'File-reading workflow needs the read tool set.');
    }
  }

  const reviewer = metadata.get('.github/agents/content-reviewer.agent.md');
  if (reviewer?.tools?.some(t => !['read', 'search'].includes(t))) fail('.github/agents/content-reviewer.agent.md', 'Reviewer must only have read and search tools.');
  for (const file of [...skills, ...prompts, ...agents]) {
    const name = skills.includes(file) ? dirname(file).split(/[\\/]/).at(-1) : file.split('/').at(-1).replace(/\.(prompt|agent)\.md$/, '');
    for (const inventory of inventories) if (!read(inventory).includes('`' + (prompts.includes(file) ? '/' : '') + name + '`') && !read(inventory).includes('**' + name + '**')) fail(inventory, `Missing inventory entry for ${name}.`);
  }

  const docs = [...github.filter(f => f.endsWith('.md')), ...files('docs').filter(f => f.endsWith('.md')), 'README.md', 'AGENTS.md', 'CONTRIBUTING.md'];
  for (const file of docs) {
    const text = read(file);
    for (const match of text.matchAll(/\[[^\]\n]*\]\(([^)\s]+)\)/g)) {
      const target = match[1];
      if (/^(?:[a-z]+:|#)/i.test(target)) continue;
      const path = resolve(root, dirname(file), decodeURIComponent(target.split('#')[0]));
      if (!existsSync(path)) fail(file, `Broken local link: ${target}.`);
    }
    for (const match of text.matchAll(/npm run ([\w:-]+)/g)) {
      if (!(match[1] in packageScripts)) fail(file, `Unknown npm command ${match[1]}.`);
    }
  }
  const map = read('docs/REPOSITORY-MAP.md');
  // Every top-level source folder belongs in the map. Generated/local ignored folders do not.
  for (const folder of ['content', 'exercises', 'scripts', 'docs', 'checklists', 'src', 'public', '.github', '.vscode']) {
    if (!map.includes('## `' + folder + '/`')) fail('docs/REPOSITORY-MAP.md', `Missing folder ${folder}/.`);
  }
  for (const file of files('scripts').filter(f => f.endsWith('.mjs'))) {
    if (!map.includes('`' + file.split('/').at(-1) + '`')) fail('docs/REPOSITORY-MAP.md', `Missing script ${file}.`);
  }
  return { errors, counts: { skills: skills.length, prompts: prompts.length, agents: agents.length, instructions: instructions.length } };
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const { errors, counts } = checkTooling(root);
    for (const error of errors) console.error(`[fail] ${error}`);
    console.log(`${errors.length ? '[fail]' : '[ok]'} AI tooling: ${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(', ')}; ${errors.length} errors.`);
    process.exitCode = errors.length ? 1 : 0;
  } catch (error) {
    console.error(`[fail] Could not check AI tooling: ${error.message}`);
    process.exitCode = 1;
  }
}
