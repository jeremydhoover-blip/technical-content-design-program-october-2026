// npm run evals                                         Run every sample in content/evals.json.
// npm run evals -- --text "Save your work" --component button   Test one string.
import { read, green, red, yellow, dim, bold } from './_util.mjs';
import { runEvals, evaluateText } from '../src/lib/evals.js';

const args = process.argv.slice(2);
const flag = name => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};

let config;
try {
  config = JSON.parse(read('content/evals.json'));
} catch (e) {
  console.error(red(`Could not read content/evals.json: ${e.message}`));
  process.exit(1);
}

// One-off test
const text = flag('text');
if (text !== undefined) {
  const component = flag('component') || 'unspecified';
  const results = evaluateText(config.criteria || [], text, component);
  console.log(bold(`\n"${text}"  ${dim(`(${component})`)}\n`));
  for (const r of results.filter(r => !r.skipped)) {
    console.log(`${r.pass ? green('[pass]') : red('[fail]')} ${r.description}${r.pass || !r.detail ? '' : dim('  ' + r.detail)}`);
  }
  const failed = results.filter(r => !r.skipped && !r.pass).length;
  console.log('');
  process.exit(failed ? 1 : 0);
}

// Full run
const runs = runEvals(config);
console.log(bold('\nEval run\n'));
for (const run of runs) {
  const label = `${run.sample.id} ${dim(`(${run.sample.component})`)}`;
  const note = run.sample.expect === 'fail' ? dim('  marked expect: fail') : '';
  console.log(`${run.ok ? green('[ok]  ') : red('[miss]')} ${label}  ${run.passed}/${run.total} criteria pass${note}`);
  if (!run.ok) {
    for (const r of run.results.filter(r => !r.skipped && !r.pass)) {
      console.log(`        ${yellow('-')} ${r.description}${r.detail ? dim('  ' + r.detail) : ''}`);
    }
    if (run.sample.expect === 'fail') console.log(`        ${yellow('-')} This sample is meant to fail, but every criterion passed. Add a criterion that catches it.`);
  }
}
const bad = runs.filter(r => !r.ok).length;
console.log('\n' + (bad ? red(`${bad} of ${runs.length} samples need attention.`) : green(`All ${runs.length} samples behave as expected.`)) + '\n');
process.exit(bad ? 1 : 0);
