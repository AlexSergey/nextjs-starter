export interface Rating {
  source: string;
  value: string;
}

export interface MoviePreviewInterface {
  genre_id: number;
  title: string;
  year: string;
  rated: string;
}

export interface MovieFullInterface {
  genre_id: number;
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: Rating[];
  metascore: string;
  imdbrating: string;
  imdbvotes: string;
  imdbid: string;
  type: string;
  dvd: string;
  boxoffice: string;
  production: string;
  website: string;
  response: string;
}
