
import log from '@src/api/utils/logger';
import {Request, Response} from 'express';
import {Rating} from '@src/api/models/rating.model';
import {saveRating} from '@src/api/services/rating.service';

const ratingControllers = {

    getRatingByBeerId(){
        
    },
    getRating(req: Request, res: Response){
        log.info('response:')
        res.send('get ok');
    },
    async addRating(req: Request, res: Response){        
        //res.send('has send' + req.body + 'params: ' + req.params.beerId);
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

    updateRating(){

    },

    deleteRating(){

    }
}

export default ratingControllers;