// Stamps a content version into index.html so browsers never mix old and new files.
//
//   node tools/stamp.mjs        (run before every commit that changes the app)
//
// What it does:
//  - hashes the app's files into a short version string and writes it to version.txt
//  - rewrites the import map in index.html so every module is requested as file.js?v=<version>
//  - adds the same ?v= to the stylesheet and the entry script
// index.html also checks version.txt on load and reloads itself once if it is out of date.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');
const modules = readdirSync(join(root, 'src')).filter((f) => f.endsWith('.js')).sort();

let html = read('index.html');
// leave the stamped values out of the hash so stamping twice gives the same version
const neutral = html.replace(/\?v=[0-9a-f]+/g, '').replace(/__APP_VERSION = '[0-9a-f]*'/, "__APP_VERSION = ''");
const h = createHash('sha1').update(neutral);
for (const f of modules) h.update(read(`src/${f}`));
for (const f of ['style.css', 'audio/manifest.json', 'vendor/three.module.min.js', 'vendor/addons/controls/OrbitControls.js']) h.update(read(f));
const v = h.digest('hex').slice(0, 10);

const imports = {
  three: `./vendor/three.module.min.js?v=${v}`,
  'three/addons/': './vendor/addons/',
  ...Object.fromEntries(modules.map((f) => [`./src/${f}`, `./src/${f}?v=${v}`])),
};
const map = JSON.stringify({ imports }, null, 2).replace(/^/gm, '    ');
html = html
  .replace(/<script type="importmap">[\s\S]*?<\/script>/, `<script type="importmap">\n${map}\n  </script>`)
  .replace(/href="\.\/style\.css(\?v=[0-9a-f]+)?"/, `href="./style.css?v=${v}"`)
  .replace(/src="\.\/src\/main\.js(\?v=[0-9a-f]+)?"/, `src="./src/main.js?v=${v}"`)
  .replace(/__APP_VERSION = '[0-9a-f]*'/, `__APP_VERSION = '${v}'`);
writeFileSync(join(root, 'index.html'), html);
writeFileSync(join(root, 'version.txt'), v + '\n');
console.log(`stamped version ${v} (${modules.length} modules)`);
