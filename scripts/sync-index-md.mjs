import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = path.join(root, 'docs', 'Trendevo index.md');
const outputPath = path.join(root, 'public', 'index.md');

function stripYamlFrontmatter(content) {
  if (!content.startsWith('---\n')) return content;
  const closing = content.indexOf('\n---\n', 4);
  if (closing === -1) return content;
  return content.slice(closing + 5).replace(/^\n/, '');
}

const source = fs.readFileSync(sourcePath, 'utf8');
fs.writeFileSync(outputPath, stripYamlFrontmatter(source));
console.log(`Synced ${outputPath} from docs/Trendevo index.md`);
