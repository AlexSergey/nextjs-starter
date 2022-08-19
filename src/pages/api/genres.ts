import type { NextApiRequest, NextApiResponse } from 'next';
import { genres } from './data.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(genres);
}
