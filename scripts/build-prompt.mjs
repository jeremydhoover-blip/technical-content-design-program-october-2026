// npm run prompt                       Print the assembled context to the terminal.
// npm run prompt -- --out prompt.md    Write it to a file instead.
// npm run prompt -- --dir content/examples/luma    Use a different folder of foundations files.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { read, exists, ROOT, dim } from './_util.mjs';
import { FOUNDATION_FILES, buildPrompt, estimateTokens } from '../src/lib/content-lib.js';

const args = process.argv.slice(2);
const flag = name => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};

const dir = flag('dir') || 'content/foundations';
const labels = {
  'voice-and-tone': 'Voice and tone',
  'personas': 'Personas',
  'grammar-and-style': 'Grammar and style',
  'component-patterns': 'Component patterns',
  'accessibility': 'Accessibility',
};

const files = FOUNDATION_FILES.map(f => ({ label: labels[f.key], content: read(`${dir}/${f.file}`) }));
const instructions = exists('content/instructions.md') ? read('content/instructions.md') : '';
const prompt = buildPrompt({ instructions, files });
const tokens = estimateTokens(prompt);

const out = flag('out');
if (out) {
  writeFileSync(join(ROOT, out), prompt, 'utf8');
  console.error(dim(`Wrote ${out}`));
} else {
  process.stdout.write(prompt);
}
console.error(dim(`About ${tokens.toLocaleString()} tokens (${prompt.length.toLocaleString()} characters).`));
