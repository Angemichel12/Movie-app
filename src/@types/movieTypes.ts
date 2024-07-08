export type movie = {
  title: string;
  duration?: string;
  posterImage: string;
  genre: string[];
  language?: string;
  country?: string;
  releaseDate?: Date;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  director: string;
  summary: string;
  trailer?: string;
  createdAt: Date;
  updatedAt: Date;
  __v?: number;
};
