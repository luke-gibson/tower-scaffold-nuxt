import type { IImage } from './image';
import type { RichTextBlocks } from './strapiRichText';

export type ContentTextBlock = {
    __component: 'content.text';
    id: number;
    content?: RichTextBlocks[] | string;
    highlight?: boolean;
    spacingTop?: boolean;
    spacingBottom?: boolean;
  };
  
export type ContentHeroBlock = {
  __component: 'content.hero';
  id: number;
  content?: RichTextBlocks[] | string;
  image?: IImage;
};
  
export type SplitContentBlock = {
  __component: 'content.split-content';
  id: number;
  content?: RichTextBlocks[] | string;
  image?: IImage;
  invert?: boolean;
  spacingTop?: boolean;
  spacingBottom?: boolean;
};
  
export type ContentBlock = ContentTextBlock | ContentHeroBlock | SplitContentBlock;