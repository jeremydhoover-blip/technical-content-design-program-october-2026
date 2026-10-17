// Rule-based evals for copy. No AI involved: each criterion is a plain, testable rule.
// Used by the Playground view in the app and by `npm run evals`.
//
// A criterion looks like:
//   { "id": "no-exclamation", "description": "...", "type": "mustNotMatch",
//     "pattern": "!", "appliesTo": ["button", "error"] }
// `appliesTo` is optional. Leave it out to apply the rule to every component.

import { wordCount } from './content-lib.js';

export const CRITERION_TYPES = [
  'mustMatch',
  'mustNotMatch',
  'maxWords',
  'minWords',
  'maxChars',
  'bannedWords',
  'sentenceCase',
];

function compile(pattern, flags) {
  try {
    return { re: new RegExp(pattern, flags || '') };
  } catch (e) {
    return { error: `Invalid pattern: ${e.message}` };
  }
}

function checkSentenceCase(text, allow = []) {
  const allowed = new Set(allow.map(w => w.toLowerCase()));
  const tokens = text.split(/\s+/).filter(Boolean);
  const bad = [];
  tokens.forEach((token, i) => {
    const word = token.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, '');
    if (!word || i === 0) return;
    if (/\d/.test(word)) return;
    if (word.length > 1 && word === word.toUpperCase()) return; // acronyms such as API
    if (word === 'I') return;
    if (allowed.has(word.toLowerCase())) return;
    const prev = tokens[i - 1];
    if (/[.!?:]["')\]]*$/.test(prev)) return; // new sentence
    if (/^[A-Z]/.test(word)) bad.push(word);
  });
  return bad;
}

// Run one criterion against one piece of text. Returns { pass, detail, error }.
export function runCriterion(criterion, text) {
  const value = text || '';
  switch (criterion.type) {
    case 'mustMatch': {
      const { re, error } = compile(criterion.pattern, criterion.flags);
      if (error) return { pass: false, error, detail: error };
      const pass = re.test(value);
      return { pass, detail: pass ? '' : 'Required pattern not found.' };
    }
    case 'mustNotMatch': {
      const { re, error } = compile(criterion.pattern, criterion.flags);
      if (error) return { pass: false, error, detail: error };
      const m = value.match(re);
      return { pass: !m, detail: m ? `Found "${m[0]}".` : '' };
    }
    case 'maxWords': {
      const n = wordCount(value);
      return { pass: n <= criterion.value, detail: `${n} words, limit ${criterion.value}.` };
    }
    case 'minWords': {
      const n = wordCount(value);
      return { pass: n >= criterion.value, detail: `${n} words, minimum ${criterion.value}.` };
    }
    case 'maxChars': {
      const n = value.length;
      return { pass: n <= criterion.value, detail: `${n} characters, limit ${criterion.value}.` };
    }
    case 'bannedWords': {
      const lower = value.toLowerCase();
      const hits = (criterion.words || []).filter(w =>
        new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(lower)
      );
      return { pass: hits.length === 0, detail: hits.length ? `Found: ${hits.join(', ')}.` : '' };
    }
    case 'sentenceCase': {
      const bad = checkSentenceCase(value, criterion.allow);
      return { pass: bad.length === 0, detail: bad.length ? `Capitalized: ${bad.join(', ')}.` : '' };
    }
    default:
      return { pass: false, error: `Unknown type "${criterion.type}"`, detail: `Unknown type "${criterion.type}".` };
  }
}

function applies(criterion, component) {
  if (!criterion.appliesTo || criterion.appliesTo.length === 0) return true;
  return criterion.appliesTo.includes(component);
}

// Run every applicable criterion against one text.
export function evaluateText(criteria, text, component) {
  return criteria.map(c => {
    if (!applies(c, component)) {
      return { id: c.id, description: c.description, skipped: true, pass: true, detail: '' };
    }
    const r = runCriterion(c, text);
    return { id: c.id, description: c.description, skipped: false, ...r };
  });
}

// Run every sample in an evals config. Returns one result per sample.
export function runEvals(config) {
  const criteria = config.criteria || [];
  return (config.samples || []).map(sample => {
    const results = evaluateText(criteria, sample.text, sample.component);
    const run = results.filter(r => !r.skipped);
    const expectFail = sample.expect === 'fail';
    const passed = run.filter(r => r.pass).length;
    const allPass = passed === run.length;
    return {
      sample,
      results,
      passed,
      total: run.length,
      // A sample marked expect: "fail" is a deliberately bad example. It "works" when the evals catch it.
      ok: expectFail ? !allPass : allPass,
    };
  });
}
