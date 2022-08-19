import type { NextApiRequest, NextApiResponse } from 'next';
import { movies } from '../data.json';
import { MovieFullInterface } from '../../../types/Movie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title } = req.query as { title: string };
  const movie = movies.find((m: MovieFullInterface) => m.title.toLowerCase() === title.toLowerCase());
  res.status(200).json(movie);
}
