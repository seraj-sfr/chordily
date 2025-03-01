import express from 'express';
import { getSongsByArtist } from '../controllers/songController';

const router = express.Router();

router.get('/:artistId', getSongsByArtist);

export default router;