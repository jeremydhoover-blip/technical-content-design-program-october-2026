import strings from './strings.json';
import { marked } from 'marked';
import {
  FOUNDATION_FILES, findPlaceholders, stripGuides, buildPrompt, estimateTokens,
} from './lib/content-lib.js';
import { evaluateText, runEvals } from './lib/evals.js';

// Content system imports — Vite loads these files as raw strings at build time.
// Content designers: this is how engineers include non-JS files in a JavaScript app.
import voiceAndToneRaw from '../content/foundations/voice-and-tone.md?raw';
import personasRaw from '../content/foundations/personas.md?raw';
import grammarAndStyleRaw from '../content/foundations/grammar-and-style.md?raw';
import componentPatternsRaw from '../content/foundations/component-patterns.md?raw';
import accessibilityRaw from '../content/foundations/accessibility.md?raw';
import instructionsRaw from '../content/instructions.md?raw';
import evalsConfig from '../content/evals.json';

// Worked example imports (Luma, a fictional product)
import exVoiceAndToneRaw from '../content/examples/luma/voice-and-tone.md?raw';
import exPersonasRaw from '../content/examples/luma/personas.md?raw';
import exGrammarAndStyleRaw from '../content/examples/luma/grammar-and-style.md?raw';
import exComponentPatternsRaw from '../content/examples/luma/component-patterns.md?raw';
import exAccessibilityRaw from '../content/examples/luma/accessibility.md?raw';

// Exercise imports
import week1Raw from '../exercises/week-1/README.md?raw';
import week2Raw from '../exercises/week-2/README.md?raw';
import week3Raw from '../exercises/week-3/README.md?raw';
import week4Raw from '../exercises/week-4/README.md?raw';
import week1ObjectivesRaw from '../exercises/week-1/LEARNING-OBJECTIVES.md?raw';
import week2ObjectivesRaw from '../exercises/week-2/LEARNING-OBJECTIVES.md?raw';
import week3ObjectivesRaw from '../exercises/week-3/LEARNING-OBJECTIVES.md?raw';
import week4ObjectivesRaw from '../exercises/week-4/LEARNING-OBJECTIVES.md?raw';
import week1HintsRaw from '../exercises/week-1/hints.md?raw';
import week2HintsRaw from '../exercises/week-2/hints.md?raw';
import week3HintsRaw from '../exercises/week-3/hints.md?raw';
import week4HintsRaw from '../exercises/week-4/hints.md?raw';
import week1PrepRaw from '../exercises/week-1/PREP.md?raw';
import week2PrepRaw from '../exercises/week-2/PREP.md?raw';
import week3PrepRaw from '../exercises/week-3/PREP.md?raw';
import week4PrepRaw from '../exercises/week-4/PREP.md?raw';

// Resource imports
import keyTermsRaw from '../docs/KEY-TERMS.md?raw';
import setupRaw from '../docs/SETUP.md?raw';
import repositoryMapRaw from '../docs/REPOSITORY-MAP.md?raw';
import aiToolingRaw from '../docs/AI-TOOLING.md?raw';
import contributingRaw from '../CONTRIBUTING.md?raw';
import checklistPrePrRaw from '../checklists/pre-pr.md?raw';
import checklistPrReviewRaw from '../checklists/pr-review.md?raw';

// --- App logo -------------------------------------------------------------------
// Dashboard card icons: one outline family, one tile style. Paths are on a 24 x 24 grid.
const dashboardIcons = {
  contentlab: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
  playground: '<path d="M9 3h6"/><path d="M10 3v6.5L5 18a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-8.5V3"/><path d="M7.5 14h9"/>',
  exercises: '<path d="M3.5 6.5L5 8l3-3.5M3.5 12.5L5 14l3-3.5M3.5 18.5L5 20l3-3.5"/><path d="M12 6.5h9M12 12.5h9M12 18.5h9"/>',
  resources: '<path d="M2 5.5A1.5 1.5 0 0 1 3.5 4H10a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H3.5A1.5 1.5 0 0 1 2 16.5z"/><path d="M22 5.5A1.5 1.5 0 0 0 20.5 4H14a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6.5a1.5 1.5 0 0 0 1.5-1.5z"/>',
};

function dashboardIcon(name) {
  return `<span class="dashboard-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${dashboardIcons[name]}</svg></span>`;
}

// ─── State ───────────────────────────────────────────────────────────────────
let currentTopView = 'dashboard';
let currentContentFile = 'voice-and-tone';
let currentContentSource = 'yours'; // 'yours' or 'example'
let currentDoc = 'week-1';
let currentExerciseTab = 'task';

const promptState = {
  source: 'yours',
  include: new Set([...FOUNDATION_FILES.map(f => f.key), 'instructions']),
};
const evalState = { component: 'button', text: '', result: null };

// ─── Data ────────────────────────────────────────────────────────────────────

const contentFiles = {
  'voice-and-tone':     { label: strings.contentlab.voiceAndTone,      content: voiceAndToneRaw },
  'personas':           { label: strings.contentlab.personas,           content: personasRaw },
  'grammar-and-style':  { label: strings.contentlab.grammarAndStyle,    content: grammarAndStyleRaw },
  'component-patterns': { label: strings.contentlab.componentPatterns,  content: componentPatternsRaw },
  'accessibility':      { label: strings.contentlab.accessibility,      content: accessibilityRaw },
  'instructions':       { label: strings.contentlab.instructions,       content: instructionsRaw },
};

const exampleFiles = {
  'voice-and-tone':     { label: strings.contentlab.voiceAndTone,      content: exVoiceAndToneRaw },
  'personas':           { label: strings.contentlab.personas,           content: exPersonasRaw },
  'grammar-and-style':  { label: strings.contentlab.grammarAndStyle,    content: exGrammarAndStyleRaw },
  'component-patterns': { label: strings.contentlab.componentPatterns,  content: exComponentPatternsRaw },
  'accessibility':      { label: strings.contentlab.accessibility,      content: exAccessibilityRaw },
};

const exercises = {
  'week-1': { label: strings.cohort.week1, content: week1Raw, objectives: week1ObjectivesRaw, hints: week1HintsRaw, prep: week1PrepRaw },
  'week-2': { label: strings.cohort.week2, content: week2Raw, objectives: week2ObjectivesRaw, hints: week2HintsRaw, prep: week2PrepRaw },
  'week-3': { label: strings.cohort.week3, content: week3Raw, objectives: week3ObjectivesRaw, hints: week3HintsRaw, prep: week3PrepRaw },
  'week-4': { label: strings.cohort.week4, content: week4Raw, objectives: week4ObjectivesRaw, hints: week4HintsRaw, prep: week4PrepRaw },
};

const resources = {
  'setup':              { label: strings.cohort.setup,            content: setupRaw },
  'key-terms':          { label: strings.cohort.keyTerms,         content: keyTermsRaw },
  'repository-map':     { label: strings.cohort.repositoryMap,    content: repositoryMapRaw },
  'ai-tooling':         { label: strings.cohort.aiTooling,        content: aiToolingRaw },
  'contributing':       { label: strings.cohort.contributing,     content: contributingRaw },
  'checklist-pre-pr':   { label: strings.cohort.checklistPrePr,   content: checklistPrePrRaw },
  'checklist-pr-review':{ label: strings.cohort.checklistPrReview,content: checklistPrReviewRaw },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Number of unfilled placeholders in a file, ignoring template guide blocks.
function placeholdersLeft(raw) {
  return findPlaceholders(stripGuides(raw)).length;
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-visible'));
  setTimeout(() => {
    toast.classList.remove('toast-visible');
    setTimeout(() => toast.remove(), 250);
  }, 2400);
}

// Fill in text for elements that carry a data-string attribute naming a strings.json key.
function applyStaticStrings() {
  document.querySelectorAll('[data-string]').forEach(el => {
    const [group, key] = el.dataset.string.split('.');
    const value = strings[group]?.[key];
    if (value) el.textContent = value;
  });
  document.title = `${strings.program.brand}: ${strings.program.subtitle}`;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function navigate(view) {
  currentTopView = view;
  // Reset to sensible defaults when switching top-level views
  if (view === 'resources' && !resources[currentDoc]) currentDoc = 'setup';
  if (view === 'exercises' && !exercises[currentDoc]) currentDoc = 'week-1';
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view);
  });
  renderSidebar(view);
  renderMain(view);
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function renderSidebar(topView) {
  const sidebar = document.getElementById('sidebar');

  if (topView === 'dashboard') {
    sidebar.style.display = 'none';
    return;
  }
  sidebar.style.display = '';

  if (topView === 'contentlab') {
    const isActive = (source, key) => currentContentSource === source && currentContentFile === key ? 'active' : '';
    sidebar.innerHTML = `
      <div class="sidebar-brand">
        <span class="sidebar-brand-icon">${dashboardIcon('contentlab')}</span>
        <span class="sidebar-brand-name">${strings.contentlab.sidebarLabel}</span>
      </div>
      <div class="sidebar-section">
        <p class="sidebar-label">${strings.contentlab.filesLabel}</p>
        <ul class="sidebar-list">
          ${Object.entries(contentFiles).map(([key, f]) =>
            `<li class="sidebar-item ${isActive('yours', key)}" data-file="${key}" data-source="yours">${f.label}</li>`
          ).join('')}
        </ul>
      </div>
      <div class="sidebar-section">
        <p class="sidebar-label">${strings.contentlab.examplesLabel}</p>
        <ul class="sidebar-list">
          ${Object.entries(exampleFiles).map(([key, f]) =>
            `<li class="sidebar-item ${isActive('example', key)}" data-file="${key}" data-source="example">${f.label}</li>`
          ).join('')}
        </ul>
      </div>`;
    sidebar.querySelectorAll('[data-file]').forEach(el =>
      el.addEventListener('click', () => {
        currentContentFile = el.dataset.file;
        currentContentSource = el.dataset.source;
        navigate('contentlab');
      })
    );
    return;
  }

  if (topView === 'playground') { sidebar.style.display = 'none'; return; }

  if (topView === 'exercises') {
    sidebar.innerHTML = `
      <div class="sidebar-section">
        <p class="sidebar-label">${strings.cohort.weeksLabel}</p>
        <ul class="sidebar-list">
          ${Object.entries(exercises).map(([key, doc]) =>
            `<li class="sidebar-item ${currentDoc === key ? 'active' : ''}" data-doc="${key}">${doc.label}</li>`
          ).join('')}
        </ul>
      </div>`;
    sidebar.querySelectorAll('[data-doc]').forEach(el =>
      el.addEventListener('click', () => { currentDoc = el.dataset.doc; currentExerciseTab = 'task'; navigate('exercises'); })
    );
    return;
  }

  if (topView === 'resources') {
    sidebar.innerHTML = `
      <div class="sidebar-section">
        <p class="sidebar-label">${strings.cohort.resourcesLabel}</p>
        <ul class="sidebar-list">
          ${Object.entries(resources).map(([key, doc]) =>
            `<li class="sidebar-item ${currentDoc === key ? 'active' : ''}" data-doc="${key}">${doc.label}</li>`
          ).join('')}
        </ul>
      </div>`;
    sidebar.querySelectorAll('[data-doc]').forEach(el =>
      el.addEventListener('click', () => { currentDoc = el.dataset.doc; navigate('resources'); })
    );
  }
}

// ─── Main renderers ───────────────────────────────────────────────────────────

function renderMain(view) {
  const main = document.getElementById('main');
  if (view === 'dashboard') { main.innerHTML = renderDashboard(); bindDashboard(); return; }
  if (view === 'contentlab') { main.innerHTML = renderContentLab(); return; }
  if (view === 'playground') {
    main.innerHTML = renderEvalRunner();
    bindEvalRunner();
    return;
  }
  if (view === 'exercises')  { main.innerHTML = renderExercise(); bindExerciseTabs(); return; }
  if (view === 'resources')  { main.innerHTML = renderDoc(resources[currentDoc]?.content || ''); return; }
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function renderDashboard() {
  return `
    <div class="dashboard">
      <h1 class="dashboard-heading">${strings.dashboard.heading}</h1>
      <p class="dashboard-subheading">${strings.dashboard.subheading}</p>
      <div class="dashboard-cards">
        <div class="dashboard-card">
          <div class="dashboard-card-header">
            ${dashboardIcon('contentlab')}
            <h2 class="dashboard-card-title">${strings.dashboard.contentlabTitle}</h2>
          </div>
          <p class="dashboard-card-desc">${strings.dashboard.contentlabDesc}</p>
          <button class="btn-primary" data-goto="contentlab">${strings.dashboard.contentlabAction}</button>
        </div>
        <div class="dashboard-card">
          <div class="dashboard-card-header">
            ${dashboardIcon('playground')}
            <h2 class="dashboard-card-title">${strings.dashboard.playgroundTitle}</h2>
          </div>
          <p class="dashboard-card-desc">${strings.dashboard.playgroundDesc}</p>
          <button class="btn-primary" data-goto="playground">${strings.dashboard.playgroundAction}</button>
        </div>
        <div class="dashboard-card">
          <div class="dashboard-card-header">
            ${dashboardIcon('exercises')}
            <h2 class="dashboard-card-title">${strings.dashboard.exercisesTitle}</h2>
          </div>
          <p class="dashboard-card-desc">${strings.dashboard.exercisesDesc}</p>
          <button class="btn-primary" data-goto="exercises">${strings.dashboard.exercisesAction}</button>
        </div>
        <div class="dashboard-card">
          <div class="dashboard-card-header">
            ${dashboardIcon('resources')}
            <h2 class="dashboard-card-title">${strings.dashboard.resourcesTitle}</h2>
          </div>
          <p class="dashboard-card-desc">${strings.dashboard.resourcesDesc}</p>
          <button class="btn-primary" data-goto="resources">${strings.dashboard.resourcesAction}</button>
        </div>
      </div>
    </div>`;
}

function bindDashboard() {
  document.querySelectorAll('[data-goto]').forEach(el =>
    el.addEventListener('click', () => navigate(el.dataset.goto))
  );
}

// ─── ContentLab ───────────────────────────────────────────────────────────────

function renderContentLab() {
  const isExample = currentContentSource === 'example';
  const file = (isExample ? exampleFiles : contentFiles)[currentContentFile];
  if (!file) return `<div class="contentlab-empty"><p class="contentlab-empty-title">${strings.contentlab.emptyTitle}</p></div>`;

  const all = Object.values(contentFiles);
  const done = all.filter(f => placeholdersLeft(f.content) === 0).length;

  const heading = isExample ? strings.contentlab.exampleHeading : strings.contentlab.heading;
  const subheading = isExample ? strings.contentlab.exampleSubheading : strings.contentlab.subheading;
  const status = isExample
    ? ''
    : `<div class="contentlab-meta">
         <span class="contentlab-status"><span class="contentlab-status-dot"></span>${done} of ${all.length} ${strings.contentlab.statusLabel}</span>
       </div>`;

  return `
    <div>
      <div class="contentlab-header">
        <h1 class="contentlab-title">${heading}</h1>
        <p class="contentlab-subtitle">${subheading}</p>
        ${status}
      </div>
      ${renderDoc(file.content)}
    </div>`;
}

// ─── Playground: prompt builder ──────────────────────────────────────────────

function currentPromptFiles() {
  const source = promptState.source === 'example' ? exampleFiles : contentFiles;
  return FOUNDATION_FILES
    .filter(f => promptState.include.has(f.key))
    .map(f => ({ label: source[f.key].label, content: source[f.key].content }));
}

function buildCurrentPrompt() {
  const files = currentPromptFiles();
  const useInstructions = promptState.source === 'yours' && promptState.include.has('instructions');
  if (!files.length && !useInstructions) return '';
  return buildPrompt({ instructions: useInstructions ? instructionsRaw : '', files });
}

function renderPromptBuilder() {
  const prompt = buildCurrentPrompt();
  const keys = [...FOUNDATION_FILES.map(f => f.key), 'instructions'];
  const checkboxes = keys.map(key => {
    const label = contentFiles[key].label;
    const disabled = key === 'instructions' && promptState.source === 'example';
    return `<label class="check-row ${disabled ? 'disabled' : ''}">
      <input type="checkbox" data-include="${key}" ${promptState.include.has(key) && !disabled ? 'checked' : ''} ${disabled ? 'disabled' : ''} />
      <span>${label}</span>
    </label>`;
  }).join('');

  return `
    <div class="doc-viewer playground">
      <h1>${strings.playground.promptHeading}</h1>
      <p>${strings.playground.promptDescription}</p>
      <div class="playground-controls">
        <div class="field">
          <label class="field-label" for="prompt-source">${strings.playground.sourceLabel}</label>
          <select id="prompt-source" class="setting-select">
            <option value="yours" ${promptState.source === 'yours' ? 'selected' : ''}>${strings.playground.sourceYours}</option>
            <option value="example" ${promptState.source === 'example' ? 'selected' : ''}>${strings.playground.sourceExample}</option>
          </select>
        </div>
        <div class="field">
          <span class="field-label">${strings.playground.includeLabel}</span>
          <div class="check-group">${checkboxes}</div>
        </div>
      </div>
      <div class="playground-stats">
        <span><strong>${estimateTokens(prompt).toLocaleString()}</strong> ${strings.playground.tokensLabel.toLowerCase()}</span>
        <span><strong>${prompt.length.toLocaleString()}</strong> ${strings.playground.charactersLabel}</span>
        <button class="btn-primary" id="copy-prompt" ${prompt ? '' : 'disabled'}>${strings.playground.copyAction}</button>
      </div>
      <pre class="prompt-preview">${prompt ? escapeHtml(prompt) : strings.playground.emptyPrompt}</pre>
    </div>`;
}

function bindPromptBuilder() {
  document.getElementById('prompt-source')?.addEventListener('change', e => {
    promptState.source = e.target.value;
    renderMain('exercises');
    document.querySelector('.context-demo')?.setAttribute('open', '');
  });
  document.querySelectorAll('[data-include]').forEach(el =>
    el.addEventListener('change', () => {
      if (el.checked) promptState.include.add(el.dataset.include); else promptState.include.delete(el.dataset.include);
      renderMain('exercises');
      document.querySelector('.context-demo')?.setAttribute('open', '');
    })
  );
  document.getElementById('copy-prompt')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(buildCurrentPrompt());
      showToast(strings.toasts.promptCopied);
    } catch {
      showToast(strings.toasts.generic, 'error');
    }
  });
}

// ─── Playground: eval runner ─────────────────────────────────────────────────

function evalComponents() {
  const set = new Set(['button', 'label', 'error', 'empty-state', 'confirmation', 'toast', 'tooltip', 'onboarding']);
  (evalsConfig.samples || []).forEach(s => set.add(s.component));
  (evalsConfig.criteria || []).forEach(c => (c.appliesTo || []).forEach(a => set.add(a)));
  return [...set];
}

function renderEvalRows(results) {
  return results
    .filter(r => !r.skipped)
    .map(r => `
      <div class="eval-assertion-row">
        <span class="eval-assertion-desc">${escapeHtml(r.description)}${!r.pass && r.detail ? ` <em>${escapeHtml(r.detail)}</em>` : ''}</span>
        <span class="assertion-badge assertion-badge--${r.pass ? 'pass' : 'fail'}">${r.pass ? strings.playground.passBadge : strings.playground.failBadge}</span>
      </div>`)
    .join('');
}

function renderCriterionCard(criterion) {
  const descriptions = {
    mustMatch: strings.playground.mustMatchHelp,
    mustNotMatch: strings.playground.mustNotMatchHelp,
    maxWords: strings.playground.maxWordsHelp,
    minWords: strings.playground.minWordsHelp,
    maxChars: strings.playground.maxCharsHelp,
    bannedWords: strings.playground.bannedWordsHelp,
    sentenceCase: strings.playground.sentenceCaseHelp,
  };
  const explanation = (descriptions[criterion.type] || strings.playground.unknownRuleHelp)
    .replace('{value}', String(criterion.value ?? ''));
  const components = criterion.appliesTo?.length
    ? criterion.appliesTo.map(component => component.replace(/-/g, ' ').replace(/^./, letter => letter.toUpperCase())).join(', ')
    : strings.playground.allComponents;
  const list = (label, values) => values?.length
    ? `<p><strong>${escapeHtml(label)}:</strong> ${values.map(value => `<span class="criterion-term">${escapeHtml(value)}</span>`).join(' ')}</p>` : '';
  return `<article class="criterion-card">
    <h3>${escapeHtml(criterion.description)}</h3>
    <p>${escapeHtml(explanation)}</p>
    ${criterion.type === 'bannedWords' ? list(strings.playground.avoidedWordsLabel, criterion.words) : ''}
    ${criterion.type === 'sentenceCase' ? list(strings.playground.allowedNamesLabel, criterion.allow) : ''}
    <p class="criterion-scope"><strong>${strings.playground.appliesLabel}</strong> ${escapeHtml(components)}</p>
    <details class="criterion-technical"><summary>${strings.playground.technicalDetailsLabel}</summary><pre>${escapeHtml(JSON.stringify(criterion, null, 2))}</pre></details>
  </article>`;
}

function renderEvalRunner() {
  const criteria = evalsConfig.criteria || [];
  const components = evalComponents();

  let resultHtml = '';
  if (evalState.result === 'empty') {
    resultHtml = `<p class="field-error">${strings.playground.noText}</p>`;
  } else if (evalState.result) {
    const run = evalState.result.filter(r => !r.skipped);
    const passed = run.filter(r => r.pass).length;
    const all = run.length > 0 && passed === run.length;
    resultHtml = `
      <h2>${strings.playground.resultsHeading}</h2>
      <p class="eval-result-summary ${all ? 'all-pass' : 'partial-pass'}">${!run.length ? strings.playground.noApplicableCriteria : all ? strings.playground.allPass : `${passed} of ${run.length} ${strings.playground.criteriaPass}`}</p>
      <div class="eval-assertion-rows">${renderEvalRows(evalState.result)}</div>`;
  }

  const sampleRuns = runEvals(evalsConfig);
  const samplesHtml = sampleRuns.map(run => `
    <details class="sample-run">
      <summary>
        <span class="assertion-badge assertion-badge--${run.ok ? 'pass' : 'fail'}">${!run.total ? strings.playground.notEvaluated : run.ok ? strings.playground.sampleOk : strings.playground.sampleMiss}</span>
        <span class="sample-text">${escapeHtml(run.sample.text)}</span>
        <span class="sample-meta">${escapeHtml(run.sample.component)}${run.sample.expect === 'fail' ? ` · ${strings.playground.sampleExpectFail}` : ''} · ${run.passed}/${run.total}</span>
      </summary>
      <p class="sample-expectation">${run.sample.expect === 'fail' ? strings.playground.expectedFailHelp : strings.playground.expectedPassHelp}</p>
      ${run.total ? `<div class="eval-assertion-rows">${renderEvalRows(run.results)}</div>` : `<p>${strings.playground.noApplicableCriteria}</p>`}
    </details>`).join('');

  return `
    <div class="doc-viewer playground">
      <h1>${strings.playground.evalHeading}</h1>
      <p>${strings.playground.evalDescription}</p>
      ${criteria.length ? '' : `<p class="field-error">${strings.playground.noCriteria}</p>`}
      <h2>${strings.playground.quickCheckHeading}</h2>
      <div class="playground-controls">
        <div class="field">
          <label class="field-label" for="eval-component">${strings.playground.componentLabel}</label>
          <select id="eval-component" class="setting-select">
            ${components.map(c => `<option value="${escapeHtml(c)}" ${evalState.component === c ? 'selected' : ''}>${escapeHtml(c.replace(/-/g, ' ').replace(/^./, letter => letter.toUpperCase()))}</option>`).join('')}
          </select>
        </div>
        <div class="field field-wide">
          <label class="field-label" for="eval-text">${strings.playground.textLabel}</label>
          <textarea id="eval-text" class="notes-textarea" rows="3">${escapeHtml(evalState.text)}</textarea>
        </div>
        <div><button class="btn-primary" id="run-evals">${strings.playground.runAction}</button></div>
      </div>
      <div class="eval-output">${resultHtml}</div>
      <p>${strings.playground.reviewHelp}</p>
      <h2>${strings.playground.rulesHeading}</h2>
      <p>${strings.playground.rulesDescription}</p>
      <div class="evaluation-rules-list">${criteria.map(renderCriterionCard).join('')}</div>
      <details class="evaluation-rules">
        <summary>${strings.playground.samplesHeading}</summary>
        <p>${strings.playground.samplesDescription}</p>
        ${samplesHtml || `<p>${strings.playground.noSamples}</p>`}
      </details>

    </div>`;
}

function bindEvalRunner() {
  document.getElementById('run-evals')?.addEventListener('click', () => {
    evalState.component = document.getElementById('eval-component').value;
    evalState.text = document.getElementById('eval-text').value;
    evalState.result = evalState.text.trim()
      ? evaluateText(evalsConfig.criteria || [], evalState.text, evalState.component)
      : 'empty';
    renderMain('playground');
  });
}

// ─── Exercises ───────────────────────────────────────────────────────────────

function renderExercise() {
  const ex = exercises[currentDoc];
  if (!ex) return '';
  const tabs = [
    { key: 'task',       label: strings.cohort.tabTask },
    { key: 'objectives', label: strings.cohort.tabObjectives },
    { key: 'hints',      label: strings.cohort.tabHints },
    { key: 'prep',       label: strings.cohort.tabPrep },
  ];
  const content = {
    task: ex.content,
    objectives: ex.objectives,
    hints: ex.hints,
    prep: ex.prep,
  }[currentExerciseTab] || '';

  return `
    <div class="exercise-tabs">
      <div class="exercise-tab-bar">
        ${tabs.map(t => `<button class="exercise-tab ${currentExerciseTab === t.key ? 'active' : ''}" data-tab="${t.key}">${t.label}</button>`).join('')}
      </div>
      ${renderDoc(content)}
      ${currentDoc === 'week-3' && currentExerciseTab === 'task' ? `<details class="context-demo"><summary>${strings.playground.contextDemoLabel}</summary>${renderPromptBuilder()}</details>` : ''}
    </div>`;
}

function bindExerciseTabs() {
  if (currentDoc === 'week-3' && currentExerciseTab === 'task') bindPromptBuilder();
  document.querySelectorAll('.exercise-tab').forEach(el =>
    el.addEventListener('click', () => { currentExerciseTab = el.dataset.tab; renderMain('exercises'); })
  );
}

// ─── Doc renderer ────────────────────────────────────────────────────────────

function renderDoc(raw) {
  // A byte order mark in front of the first "#" stops Markdown from reading it as a heading.
  const text = (raw || '').replace(/^\uFEFF/, '');
  return `<div class="doc-viewer"><div class="doc-content prose">${marked.parse(text)}</div></div>`;
}

// ─── Boot ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  applyStaticStrings();
  document.querySelectorAll('.nav-link[data-view]').forEach(el =>
    el.addEventListener('click', e => { e.preventDefault(); navigate(el.dataset.view); })
  );
  navigate('dashboard');
});
