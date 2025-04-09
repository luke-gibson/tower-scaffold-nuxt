import type { IImage } from './image';
import type { ContentBlock } from './contentBlock';
import type { ServiceData } from './service';


export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: IImage;
}

export interface HomeData {
  data: {
    title?: string;
    description?: string;
    image: IImage;
    content: ContentBlock[];
    services?: ServiceData[];
  };
}