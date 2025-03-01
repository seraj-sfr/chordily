import { Request, Response } from 'express';
import { Song } from '../models/Song';

export const getSongsByArtist = async (req: Request, res: Response) => {
  const { artistId } = req.params;

  try {
    const songs = await Song.findMany({
      where: { artistId: artistId },
    });
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching songs' });
  }
};
