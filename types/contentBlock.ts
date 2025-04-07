import type { IImage } from './image';

export type ContentTextBlock = {
    __component: 'content.text';
    id: number;
    content?: string;
    highlight?: boolean;
    spacingTop?: boolean;
    spacingBottom?: boolean;
  };
  
export type ContentHeroBlock = {
  __component: 'content.hero';
  id: number;
  content?: string;
  image: IImage;
};
  
export type SplitContentBlock = {
  __component: 'content.split-content';
  id: number;
  content?: string;
  image?: IImage;
  invert?: boolean;
  spacingTop?: boolean;
  spacingBottom?: boolean;
};
  
export type ContentBlock = ContentTextBlock | ContentHeroBlock | SplitContentBlock;