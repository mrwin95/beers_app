import { Rating } from "@src/api/models/rating.model";
import log from '@src/api/utils/logger';

export const saveRating = async(rating: any) => {
    log.info(`Inside saveRating method of the rating.service`);
    try{
        const rt = new Rating(rating);
        await rt.save();
    }catch(err){
        log.error(err);
        return null;
    }    
}

export const getRatingById =async (id:string) => {
    log.info('get Rating by id' + id);
    const result = Rating.findById(id);
}

export const updateRating =async (id: string, rating: any) => {
    log.info('update rating by Id');
}

export const deleteRating =async (id:string) => {
    log.info('delete rating')
}

export const getRatings =async () => {
    log.info('get list of rating');
}