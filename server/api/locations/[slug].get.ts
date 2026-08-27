import { readFileSync } from 'fs';
import { join } from 'path';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const file = join(process.cwd(), `data/locations/${slug}.json`);
  return JSON.parse(readFileSync(file, 'utf-8'));
});
