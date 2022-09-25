import { Rating } from "../models/Rating.model";
import log from '@src/api/utils/logger';
export const saveRating = async(rating: Rating) => {
    log.info(`Inside saveRating method of the rating.service`);
    // saving to nosql
    
}