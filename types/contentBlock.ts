import type { IImage } from './image';

export type ContentTextBlock = {
    __component: 'content.text';
    id: number;
    content?: string;
  };
  
  export type ContentHeroBlock = {
    __component: 'content.hero';
    id: number;
    content?: string;
    image: IImage;
  };
  
  export type ContentBlock = ContentTextBlock | ContentHeroBlock;