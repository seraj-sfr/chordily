import express from 'express';
import {
    getAllArtists,
    getArtist,
    createArtist,
    updateArtist,
    deleteArtist
} from '../controllers/artistController';

const router = express.Router();

router.get('/', getAllArtists);
router.get('/:artistId', getArtist);
router.post('/', createArtist);
router.put('/:artistId', updateArtist);
router.delete('/:artistId', deleteArtist);

export default router;
