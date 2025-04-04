import type { IImage } from './image';
import type { ContentBlock } from './contentBlock';

export interface ContactData {
  data: {
    title?: string;
    description?: string;
    image: IImage;
    content: ContentBlock[];
  };
}