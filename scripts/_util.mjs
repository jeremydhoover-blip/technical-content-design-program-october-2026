// Small helpers shared by the scripts in this folder.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export const read = rel => readFileSync(join(ROOT, rel), 'utf8');
export const exists = rel => existsSync(join(ROOT, rel));

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const paint = code => s => (useColor ? `\x1b[${code}m${s}\x1b[0m` : s);
export const green = paint(32);
export const yellow = paint(33);
export const red = paint(31);
export const dim = paint(2);
export const bold = paint(1);
