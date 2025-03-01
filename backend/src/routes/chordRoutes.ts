import express from 'express';
import { getChordsBySong, addChord, updateChord, deleteChord } from '../controllers/chordController';

const router = express.Router();

router.get('/:songId', getChordsBySong);

router.post('/', addChord);

router.put('/:chordId', updateChord);

router.delete('/:chordId', deleteChord);

export default router;
