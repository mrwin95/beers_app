
import log from '@src/api/utils/logger';
import {Request, Response} from 'express';
import {Rating} from '@src/api/models/rating.model';
const ratingControllers = {

    getRatingByBeerId(){
        
    },
    getRating(req: Request, res: Response){
        log.info('response:')
        res.send('get ok');
    },
    async addRating(req: Request, res: Response){        
        res.send('has send' + req.body + 'params: ' + req.params.beerId);
        try{
            let beerId = req.params.beerId;
            let {rating, comments} = req.body;
            const rat = new Rating({
                beerId,
                rating,
                comments
            });

            await rat.save();        
            log.info('rating obj: ' + rating);
        }catch(err){
            log.error(err);
        }
    },

    updateRating(){

    },

    deleteRating(){

    }
}

export default ratingControllers;