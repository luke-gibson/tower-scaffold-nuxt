import type { IImage } from './image';
import type { ContentBlock } from './contentBlock';

export interface Service {
  id: number;
  title: string;
  slug: string;
  image: IImage;
}

export interface AboutData {
  data: {
    title?: string;
    description?: string;
    image: IImage;
    content: ContentBlock[];
  };
}