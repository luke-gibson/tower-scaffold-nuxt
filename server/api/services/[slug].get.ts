import { readFileSync } from 'fs';
import { join } from 'path';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const file = join(process.cwd(), 'data/services.json');
  const all = JSON.parse(readFileSync(file, 'utf-8'));
  const matched = (all.data as any[]).filter((s: any) => s.slug === slug);
  return { data: matched, meta: all.meta };
});
