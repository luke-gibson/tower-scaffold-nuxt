import type { IImage } from './image';
import type { ContentBlock } from './contentBlock';

export interface ServiceData {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  image: IImage;
  content: ContentBlock[];
}