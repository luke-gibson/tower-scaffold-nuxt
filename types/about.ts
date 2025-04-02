import type { IImage } from './image';

export interface Service {
  id: number;
  title: string;
  slug: string;
  image: IImage;
}

export interface AboutData {
  data: {
    content: {
      __component: string;
      id: number;
      copy?: string;
      image?: IImage;
    }[];
  };
}