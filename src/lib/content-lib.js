// Shared helpers for reading the content system.
// Used by the app (browser) and by the scripts in /scripts (Node), so this file
// must stay free of DOM and Node-only APIs.

// The five foundations files, in the order the program builds them.
// `required` lists headings that each file must keep so tools can find sections.
export const FOUNDATION_FILES = [
  {
    key: 'voice-and-tone',
    file: 'voice-and-tone.md',
    required: ['The voice', 'The tone by context', 'Anti-patterns'],
  },
  {
    key: 'personas',
    file: 'personas.md',
    required: ['Persona 1', 'Persona 2'],
  },
  {
    key: 'grammar-and-style',
    file: 'grammar-and-style.md',
    required: ['Voice fundamentals', 'Punctuation', 'Capitalization', 'Word choice', 'Terminology'],
  },
  {
    key: 'component-patterns',
    file: 'component-patterns.md',
    required: ['Buttons', 'Error messages', 'Empty states', 'Confirmation dialogs'],
  },
  {
    key: 'accessibility',
    file: 'accessibility.md',
    required: ['Plain language', 'Alternative text', 'Link text', 'Form labels', 'Error identification'],
  },
];

// Remove fenced code blocks and inline code so examples are never counted as content.
export function stripCode(text) {
  return (text || '').replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
}

// Remove "Guide" blocks: template instructions written as blockquotes that start with
// "> **Guide:**". They help humans fill in a file and are noise for an AI.
export function stripGuides(text) {
  const lines = (text || '').split('\n');
  const out = [];
  let inGuide = false;
  for (const line of lines) {
    if (/^>\s*\*\*Guide:?\*\*/i.test(line)) { inGuide = true; continue; }
    if (inGuide && /^>/.test(line)) continue;
    inGuide = false;
    out.push(line);
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

// Find unfilled placeholders such as [Your product name] or [Term 1].
// Markdown links ([text](url)) and task boxes ([ ], [x]) are ignored.
export function findPlaceholders(text) {
  const clean = stripCode(text);
  const matches = clean.match(/\[[^\]\n]+\](?!\()/g) || [];
  return matches.filter(m => !/^\[(x|X| )\]$/.test(m));
}

export function headingsOf(text) {
  return stripCode(text)
    .split('\n')
    .filter(l => /^#{1,6}\s/.test(l))
    .map(l => l.replace(/^#{1,6}\s+/, '').trim());
}

// A required heading matches if any heading in the file starts with it.
export function missingHeadings(text, required) {
  const found = headingsOf(text).map(h => h.toLowerCase());
  return required.filter(req => !found.some(h => h.startsWith(req.toLowerCase())));
}

// Rough estimate: about 4 characters per token for English text.
export function estimateTokens(text) {
  return Math.ceil((text || '').length / 4);
}

export function wordCount(text) {
  const t = (text || '').trim();
  return t ? t.split(/\s+/).length : 0;
}

// Assemble the context a writing assistant would receive: instructions first,
// then each content system file. Guides are stripped to save tokens.
export function buildPrompt({ instructions, files }) {
  const parts = [];
  if (instructions && instructions.trim()) {
    parts.push('# Instructions\n\n' + stripGuides(instructions).trim());
  }
  for (const f of files) {
    parts.push(`# ${f.label}\n\n` + stripGuides(f.content).trim());
  }
  return parts.join('\n\n---\n\n') + '\n';
}

// How complete is a file? 0 to 100, based on placeholders left.
export function completion(text) {
  const left = findPlaceholders(text).length;
  return { placeholders: left, done: left === 0 };
}
