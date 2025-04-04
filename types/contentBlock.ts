import type { IImage } from './image';

export type ContentTextBlock = {
    __component: 'content.text';
    id: number;
    copy?: string;
  };
  
  export type ContentHeroBlock = {
    __component: 'content.hero';
    id: number;
    copy?: string;
    image: IImage;
  };
  
  export type ContentBlock = ContentTextBlock | ContentHeroBlock;