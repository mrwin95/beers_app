
import log from '@src/api/utils/logger';
import {Request, Response} from 'express';
import Rating from '@src/api/models/rating.model';
import {saveRating, getRatingById, getRatingByBeerId, updateRating} 
from '@src/api/services/rating.service';

const ratingControllers = {

    /**
     * The method of the rating controller to call rating service
     * and return to view
     * @param req 
     * @param res 
     */
    async getRatingById(req: Request, res: Response){
        log.info('GetRatingById method of the Rating.controller')
        const beerId : any = req.params.id;
        const ratings = await getRatingById(beerId);
        
        if(ratings != null){
            res.status(200).json({
                status: true,
                data: JSON.parse(JSON.stringify(ratings))
            })
        }
        log.info("data--->" + ratings);
    },
    async getRatingByBeerId(req: Request, res: Response){
        log.info('GetRatingByBeerId method of the Rating.controller')
        const beerId : any = req.params.beerId;
        const ratings = await getRatingByBeerId(beerId);
        
        if(ratings != null){
            res.status(200).json({
                status: true,
                data: JSON.parse(JSON.stringify(ratings))
            })
        }
        log.info("data--->" + ratings);
    },
    /**
     * 
     * @param req 
     * @param res 
     */
    async addRating(req: Request, res: Response){        
        log.info('Inside addRating method of rating.controller')
        try{
            let beerId = req.params.beerId;
            let {rating, comments} = req.body;
            
            const rat = new Rating({
                beerId,
                rating,
                comments
            });

            saveRating(rat).then((rtt) => res.status(201).json(rtt));                
            log.info('rating obj: ' + rating);
        }catch(err: any){
            log.error(err);
            res.status(404).json({
                status: 'failed',
                message: err.message
            })
        }
    },

    /**
     * 
     */
    updateRating(req: Request, res: Response){
        log.info('Inside updateRating method of rating.controller');
        let beerId = req.params.beerId;
            let {rating, comments} = req.body;
            try{
            const rat = new Rating({
                beerId,
                rating,
                comments
            });
        
            const result = updateRating(beerId, rat);

            res.status(201).json({
                status: true,
                message: 'Rating has been updated'
            });
        }catch(err: any){
            log.error(err);
            res.status(404).json({
                status: 'failed',
                message: err.message
            })
        }
    },

    deleteRating(){

    }
}

export default ratingControllers;