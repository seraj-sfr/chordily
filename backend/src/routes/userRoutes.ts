import express from 'express';
import { 
    createUser,
    getAllUsers,
    getUser,
    followArtist,
    unfollowArtist,
} from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:userId', getUser);
router.post('/:userId/follow', followArtist);
router.post('/:userId/unfollow', unfollowArtist);

export default router;
