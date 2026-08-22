import { mkdir, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'data');

const STRAPI_URL = 'https://safe-broccoli-94775bb690.strapiapp.com';

const endpoints = [
  { name: 'home', path: '/api/home?pLevel' },
  { name: 'about', path: '/api/about?pLevel' },
  { name: 'contact', path: '/api/contact?pLevel' },
  { name: 'services-page', path: '/api/services-page?pLevel' },
  { name: 'services', path: '/api/services?pLevel&pagination[pageSize]=100' },
];

async function fetchEndpoint(path) {
  const url = `${STRAPI_URL}${path}`;
  console.log(`Fetching ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function run() {
  await mkdir(DATA_DIR, { recursive: true });

  for (const { name, path } of endpoints) {
    const data = await fetchEndpoint(path);
    const dest = join(DATA_DIR, `${name}.json`);
    await writeFile(dest, JSON.stringify(data, null, 2));
    console.log(`Saved ${dest}`);
  }

  console.log('\nMigration complete. All data saved to data/');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
