import { readFileSync } from 'fs';
import { join } from 'path';

export default defineEventHandler(() => {
  const file = join(process.cwd(), 'data/services-page.json');
  return JSON.parse(readFileSync(file, 'utf-8'));
});
