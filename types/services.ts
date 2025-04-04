import type { IImage } from './image';

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: IImage;
}

export interface ServicesData {
  data: {
    title?: string;
    description?: string;
    image: IImage;
    content: {
      __component: string;
      id: number;
      copy?: string;
      image?: IImage;
    }[];
    services?: Service[];
  };
}