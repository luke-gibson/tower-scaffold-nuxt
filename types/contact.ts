import type { IImage } from './image';

export interface ContactData {
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
  };
}