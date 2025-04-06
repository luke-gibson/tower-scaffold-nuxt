export interface IImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface IImage {
  id: number;
  alternativeText: string;
  width: number;
  height: number;
  formats: {
    small?: IImageFormat;
    medium?: IImageFormat;
    large?: IImageFormat;
    thumbnail?: IImageFormat;
  };
  url: string;
}