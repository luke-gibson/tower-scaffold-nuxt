import { readFileSync } from 'fs';
import { join } from 'path';

export default defineEventHandler(() => {
  const file = join(process.cwd(), 'data/contact.json');
  return JSON.parse(readFileSync(file, 'utf-8'));
});
