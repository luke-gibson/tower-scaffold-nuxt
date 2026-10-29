/**
 * Replaces all Strapi media URLs in data/*.json with local /images/ paths.
 *
 * Each unique "base" Strapi image is assigned one of the local photos in
 * public/images/. All size-variant URLs (large_, medium_, small_, thumbnail_)
 * for the same base image are mapped to the same local file.
 *
 * Run: node scripts/remap-images.mjs
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'data');
const IMAGES_DIR = join(ROOT, 'public', 'images');
const STRAPI_HOST = 'safe-broccoli-94775bb690.media.strapiapp.com';

// Strip size prefix (large_, medium_, small_, thumbnail_) to get the base filename
function baseFilename(strapiPath) {
  return strapiPath.replace(/^(?:large|medium|small|thumbnail)_/, '');
}

async function run() {
  // Collect all local images
  const localFiles = (await readdir(IMAGES_DIR))
    .filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
    .sort();

  if (!localFiles.length) {
    console.error('No images found in public/images/');
    process.exit(1);
  }

  // Collect every unique Strapi URL across all data files
  const dataFiles = (await readdir(DATA_DIR)).filter(f => f.endsWith('.json'));
  const allJson = {};
  for (const file of dataFiles) {
    allJson[file] = await readFile(join(DATA_DIR, file), 'utf8');
  }

  // Find all unique base filenames referenced in the data
  const strapiUrlRegex = new RegExp(
    `https://${STRAPI_HOST.replace('.', '\\.')}/([^"]+)`,
    'g'
  );
  const baseNames = new Set();
  for (const content of Object.values(allJson)) {
    for (const match of content.matchAll(strapiUrlRegex)) {
      baseNames.add(baseFilename(match[1]));
    }
  }

  const uniqueBases = [...baseNames].sort();
  console.log(`Found ${uniqueBases.length} unique base images across all data files.`);

  // Assign a local file to each unique base image (round-robin)
  const mapping = {};
  uniqueBases.forEach((base, i) => {
    mapping[base] = `/images/${localFiles[i % localFiles.length]}`;
  });

  console.log('\nImage mapping:');
  for (const [base, local] of Object.entries(mapping)) {
    console.log(`  ${base.slice(0, 50).padEnd(50)} → ${local}`);
  }

  // Replace all Strapi URLs in each data file
  let totalReplacements = 0;
  for (const [file, content] of Object.entries(allJson)) {
    const updated = content.replace(strapiUrlRegex, (match, path) => {
      const base = baseFilename(path);
      totalReplacements++;
      return mapping[base] ?? match;
    });
    await writeFile(join(DATA_DIR, file), updated);
    console.log(`\nUpdated ${file}`);
  }

  console.log(`\nDone. ${totalReplacements} URL replacements made across ${dataFiles.length} files.`);
  console.log('\nNote: each base image has been assigned a photo sequentially.');
  console.log('Review the mapping above and manually swap image filenames in data/*.json if needed.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
