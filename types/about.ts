export interface IAbout {
    id: number;
    name: string,
    title: string;
    description: string;
    slug: string;
    image: IImage;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface IImageFormat {
    url: string;
    width: number;
    height: number;
  }
  
  export interface IImage {
    id: number;
    alternativeText: string;
    formats: {
      small?: IImageFormat;
      medium?: IImageFormat;
      large?: IImageFormat;
      thumbnail?: IImageFormat;
    };
    url: string;
  }