import type { IImage } from './image';

export interface ContentBlock {
  __component: string;
  id: number;
  copy?: string;
  image?: IImage;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  image: IImage;
}


export interface HomeData {
  data: {
    content: {
      __component: string;
      id: number;
      copy?: string;
      image?: {
        url: string;
        alternativeText: string;
      };
    }[];
    services?: Service[];
  };
}