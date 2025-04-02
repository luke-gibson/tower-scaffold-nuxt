// Define a type for Dynamic Zones
export type IZonesContent = 
  | ITextComponent
  | IHeroComponent;

// Define Text Component
export interface ITextComponent {
  __component: "pages.text";
  id: number;
  copy: string;
}

// Define Image Component
export interface IImageComponent {
  __component: "pages.hero";
  id: number;
  image: string;
  alt: string;
  copy: string;
}