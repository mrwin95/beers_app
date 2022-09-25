import express from 'express';
const router = express.Router();
import ratingController from '@src/api/controllers/rating.controller';

router.post('/rating', ratingController.addRating);
router.get('/rating', ratingController.getRating);
router.put('/rating/:beerId/:rating', ratingController.updateRating);

export default router;