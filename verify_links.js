// Verify the 5 edited links render-array regions parse as valid JS in each page.
// For each page, extract the directions1 array literal (pure JS) via brace matching
// and validate it with new Function; also confirm each target paper now has its links.
const fs = require('fs');
const path = require('path');
const BASE = 'D:\\aaa\\xinyangDUT.github.io';

const pages = [
  {
    file: path.join(BASE, 'Knowledge_Graphs_and_Large_Models', 'index.html'),
    titles: ['Improving large models with small models: Lower costs and better performance',
             'DCPNet: a comprehensive framework for multimodal sarcasm detection via graph topology extraction and multi-scale feature fusion'],
    links: ['https://doi.org/10.1016/j.neunet.2025.108276',
            'https://doi.org/10.1007/s11704-025-50196-4']
  },
  {
    file: path.join(BASE, 'Bio-inspired_Intelligence_and_Embodied_Robotic_Systems', 'index.html'),
    titles: ['Efficient Vision Transformer with Token Sparsification for Event-Based Object Tracking',
             'AlignTrack: Top-Down Spatiotemporal Resolution Alignment for RGB-Event Visual Tracking'],
    links: ['https://doi.org/10.1007/s11263-025-02666-2',
            'https://doi.org/10.1609/aaai.v40i11.37874']
  },
  {
    file: path.join(BASE, 'Visual_Perception_and_Understanding_in_Complex_Scenes', 'index.html'),
    titles: ['Temporal Prompt Learning With Depth Memory for Video Mirror Detection'],
    links: ['https://doi.org/10.1109/tmm.2025.3623544']
  }
];

// Extract the full `directions1: [ ... ]` array literal as a JS string via brace matching.
function extractDirectionsArray(src) {
  const idx = src.indexOf('directions1:');
  if (idx < 0) throw new Error('directions1: not found');
  const open = src.indexOf('[', idx);
  if (open < 0) throw new Error('array open not found');
  let depth = 0, inStr = null, i = open;
  for (; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (c === '\\') { i++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === '[' || c === '{') depth++;
    else if (c === ']' || c === '}') { depth--; if (depth === 0) break; }
  }
  return src.slice(open, i + 1);
}

let allOk = true;
for (const page of pages) {
  const src = fs.readFileSync(page.file, 'utf8');
  const arrText = extractDirectionsArray(src);
  let parsed;
  try {
    parsed = new Function('return (' + arrText + ')')();
  } catch (e) {
    console.log('PARSE FAIL:', path.basename(page.file), '->', e.message);
    allOk = false;
    continue;
  }
  console.log('PARSE OK  :', path.basename(page.file), '(' + arrText.length + ' chars)');
  // Walk directions1->domains->projects / projects to find each target title and its links.
  const foundLinks = [];
  function walkProjects(projects) {
    for (const p of projects || []) {
      if (!p || typeof p !== 'object') continue;
      if (p.title && page.titles.includes(p.title)) {
        const ls = (p.links || []).map(l => l.link);
        foundLinks.push({ title: p.title, links: ls, hasAbstract: !!(p.abstract && p.abstract.length > 20) });
      }
      if (p.projects) walkProjects(p.projects);
      if (p.domains) for (const d of p.domains) walkProjects(d.projects);
    }
  }
  for (const dir of parsed) {
    if (dir.projects) walkProjects(dir.projects);
    if (dir.domains) for (const d of dir.domains) {
      if (d.domains && Array.isArray(d.domains)) for (const d2 of d.domains) walkProjects(d2.projects);
      walkProjects(d.projects);
    }
  }
  for (let i = 0; i < page.titles.length; i++) {
    const t = page.titles[i];
    const f = foundLinks.find(x => x.title === t);
    if (!f) { console.log('  MISSING   entry:', t); allOk = false; continue; }
    const has = f.links.includes(page.links[i]);
    console.log((has ? '  LINK OK   ' : '  LINK WRONG') + ':', t, '->', JSON.stringify(f.links));
    if (!has) allOk = false;
    console.log((f.hasAbstract ? '  ABS OK    ' : '  ABS MISSING') + ':', t);
    if (!f.hasAbstract) allOk = false;
  }
}
console.log(allOk ? '\nALL CHECKS PASSED' : '\nSOME CHECKS FAILED');
