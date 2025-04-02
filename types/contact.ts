import type { IImage } from './image';

export interface ContactData {
  data: {
    content: {
      __component: string;
      id: number;
      copy?: string;
      image?: IImage;
    }[];
  };
}