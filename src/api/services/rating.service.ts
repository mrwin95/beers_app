import Rating  from "@src/api/models/rating.model";
import log from '@src/api/utils/logger';

/**
 * The method store a rating to the database
 * @param rating 
 * @returns return the rating has stored to database
 */
export const saveRating = async(rating: any) => {
    log.info(`Inside saveRating method of the rating.service`);
    try{
        const rt = new Rating(rating);
        const existedRating = await getRatingByBeerId(rating.beerId);
        log.info('exsting: ' + existedRating + "new" + rt);
        if(existedRating){
            await Rating.findOneAndUpdate({beerId: rating.beerId, rating: rt.rating, comments: rt.comments},{isNew: true});
            // await updateRating(rating.beerId, rating);
        }else {
            await rt.save().then((result: any) => {
                log.info('Inform: ' + result);
            });
        }        
    }catch(err){
        log.error(err);
        return null;
    }    
}

/**
 * The method get rating by id
 * @param id the id of a rating
 * @returns the rating matched with the id
 */
export const getRatingById =async (id: string) => {
    log.info('get Rating by id' + id);
    const result = await Rating.findById(id);
    // log.info("data" + result);
    return result;
}

/**
 * The method get rating by beerId
 * @param beerId 
 * @returns the rating matched with beerId
 */
export const getRatingByBeerId = async (beerId: number) => {
    log.info('Inside getRatingByBeerId method of rating.service');
    const result = await Rating.find({"beerId": beerId});
    return result;
}

/**
 * 
 * @param id 
 * @param rating 
 */
export const updateRating =async (id: string, rating: any) => {
    log.info('update rating by Id');
    let result = await Rating.findOneAndUpdate({beerId: id, rating: rating.rating, comments: rating.comments},{isNew: true});
    return result;
}

/**
 * 
 * @param id 
 */
export const deleteRating =async (id:string) => {
    log.info('delete rating')
}