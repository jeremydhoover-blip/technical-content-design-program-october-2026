// npm run check          Report problems in your content system. Fails only on real errors.
// npm run check:strict   Also fail on unfilled placeholders (use before your final PR).
import { read, exists, green, yellow, red, dim, bold } from './_util.mjs';
import {
  FOUNDATION_FILES, findPlaceholders, missingHeadings, stripCode, stripGuides,
} from '../src/lib/content-lib.js';
import { CRITERION_TYPES } from '../src/lib/evals.js';

const strict = process.argv.includes('--strict');
const errors = [];
const warnings = [];
const error = (file, msg) => errors.push({ file, msg });
const warn = (file, msg) => warnings.push({ file, msg });

function styleChecks(file, text) {
  const body = stripCode(stripGuides(text));
  if (/—/.test(body)) warn(file, 'Contains an em dash. Rewrite with a comma, a period, or a new sentence.');
  if (/\.\.(?!\.)/.test(body)) warn(file, 'Contains a double period.');
  if (/,,/.test(body)) warn(file, 'Contains a double comma.');
  if (/\b[A-Za-z]+\.(t|s|ve|re|ll)\b/.test(body)) warn(file, 'Possible broken apostrophe (for example "Don.t").');
}

// 1. Foundations files
for (const f of FOUNDATION_FILES) {
  const path = `content/foundations/${f.file}`;
  if (!exists(path)) { error(path, 'File is missing.'); continue; }
  const text = read(path);
  const missing = missingHeadings(text, f.required);
  if (missing.length) error(path, `Missing required heading${missing.length > 1 ? 's' : ''}: ${missing.join(', ')}.`);
  const ph = findPlaceholders(stripGuides(text));
  if (ph.length) (strict ? error : warn)(path, `${ph.length} placeholder${ph.length > 1 ? 's' : ''} left, for example ${ph[0]}.`);
  styleChecks(path, text);
}

// 2. AI instructions file
if (!exists('content/instructions.md')) {
  (strict ? error : warn)('content/instructions.md', 'File is missing. You create it in Week 3.');
} else {
  const text = read('content/instructions.md');
  const ph = findPlaceholders(stripGuides(text));
  if (ph.length) (strict ? error : warn)('content/instructions.md', `${ph.length} placeholder${ph.length > 1 ? 's' : ''} left.`);
  styleChecks('content/instructions.md', text);
}

// 3. Evals file
if (exists('content/evals.json')) {
  try {
    const cfg = JSON.parse(read('content/evals.json'));
    const ids = new Set();
    for (const c of cfg.criteria || []) {
      if (!c.id || !c.description) error('content/evals.json', 'A criterion needs an id and a description.');
      if (ids.has(c.id)) error('content/evals.json', `Duplicate criterion id "${c.id}".`);
      ids.add(c.id);
      if (!CRITERION_TYPES.includes(c.type)) error('content/evals.json', `Criterion "${c.id}" has unknown type "${c.type}".`);
    }
    for (const s of cfg.samples || []) {
      if (!s.id || !s.component || typeof s.text !== 'string') error('content/evals.json', 'A sample needs an id, a component, and text.');
    }
    if (!(cfg.criteria || []).length) warn('content/evals.json', 'No criteria yet.');
  } catch (e) {
    error('content/evals.json', `Not valid JSON: ${e.message}`);
  }
}

// 4. strings.json
try {
  const strings = JSON.parse(read('src/strings.json'));
  const flat = {};
  for (const [group, obj] of Object.entries(strings)) {
    for (const [key, value] of Object.entries(obj)) {
      flat[`${group}.${key}`] = value;
      if (typeof value !== 'string' || !value.trim()) error('src/strings.json', `${group}.${key} is empty.`);
      else if (value !== value.trim()) error('src/strings.json', `${group}.${key} has leading or trailing whitespace.`);
    }
  }
  const code = read('src/main.js') + (exists('index.html') ? read('index.html') : '');
  const used = new Set();
  for (const m of code.matchAll(/strings\.([A-Za-z0-9_]+)\.([A-Za-z0-9_]+)/g)) used.add(`${m[1]}.${m[2]}`);
  for (const m of code.matchAll(/data-string="([A-Za-z0-9_]+)\.([A-Za-z0-9_]+)"/g)) used.add(`${m[1]}.${m[2]}`);
  for (const k of used) if (!(k in flat)) error('src/strings.json', `The app uses ${k}, but that key does not exist. Was a key renamed?`);
  for (const k of Object.keys(flat)) if (!used.has(k)) warn('src/strings.json', `${k} is not used by the app.`);
} catch (e) {
  error('src/strings.json', `Not valid JSON: ${e.message}`);
}

// Report
console.log(bold('\nContent check\n'));
for (const w of warnings) console.log(`${yellow('[warn]')}  ${w.file}\n        ${w.msg}`);
for (const e of errors) console.log(`${red('[error]')} ${e.file}\n        ${e.msg}`);
if (!warnings.length && !errors.length) console.log(green('No problems found.'));
console.log('\n' + dim(`${errors.length} error${errors.length === 1 ? '' : 's'}, ${warnings.length} warning${warnings.length === 1 ? '' : 's'}${strict ? ' (strict)' : ''}`) + '\n');
process.exit(errors.length ? 1 : 0);
