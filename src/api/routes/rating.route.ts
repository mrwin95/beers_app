import express from 'express';
const router = express.Router();
import ratingController from '@src/api/controllers/rating.controller';

/**
 * 
 */
router.post('/rating/:beerId', ratingController.addRating);
router.get('/rating/:beerId', ratingController.getRatingByBeerId);
router.get('/rating/:id', ratingController.getRatingById);
router.put('/rating/:beerId', ratingController.updateRating);

export default router;