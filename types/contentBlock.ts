import type { IImage } from './image';

export type ContentBlock =
    | { __component: 'content.hero'; id: number; title?: string; image: IImage }
    | { __component: 'content.text'; id: number; copy?: string };