import type { NextApiRequest, NextApiResponse } from 'next';
import { movies } from './data.json';
import { MoviePreviewInterface, MovieFullInterface } from '../../types/Movie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const lowerMovies = movies.map<MoviePreviewInterface>(({ genre_id, title, year, rated }: MovieFullInterface) => ({
    genre_id,
    title,
    year,
    rated,
  }));
  res.status(200).json(lowerMovies);
}
