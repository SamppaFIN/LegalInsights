// Batch update BRDC headers to set grade: diamond across the repository
// Usage: node scripts/batchUpdateBRDC.js

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const ALLOWED_EXT = new Set(['.md', '.ts', '.tsx']);

function listFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (e.name.startsWith('.git') || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...listFiles(p));
    else files.push(p);
  }
  return files;
}

function updateContent(content) {
  if (!/BRDC/i.test(content)) return null; // skip non-brdc files

  const lines = content.split(/\r?\n/);
  let changed = false;
  let hasGrade = false;

  for (let i = 0; i < lines.length && i < 80; i++) {
    const line = lines[i];
    if (/^\s*grade\s*:/i.test(line)) {
      if (!/diamond/i.test(line)) {
        lines[i] = 'grade: diamond';
        changed = true;
      }
      hasGrade = true;
      break;
    }
  }

  if (!hasGrade) {
    // insert grade immediately after a BRDC marker line
    for (let i = 0; i < Math.min(lines.length, 80); i++) {
      if (/^\s*BRDC\b/i.test(lines[i])) {
        lines.splice(i + 1, 0, 'grade: diamond');
        changed = true;
        break;
      }
    }
  }

  return changed ? lines.join('\n') : null;
}

(function main() {
  const files = listFiles(ROOT).filter(f => ALLOWED_EXT.has(path.extname(f)));
  let updated = 0;
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const next = updateContent(content);
      if (next) {
        fs.writeFileSync(file, next, 'utf8');
        updated++;
      }
    } catch (e) {
      // ignore
    }
  }
  console.log(`BRDC batch update complete. Files updated: ${updated}`);
})();
