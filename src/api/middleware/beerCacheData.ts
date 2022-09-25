import {Request, Response, NextFunction} from 'express';
// import {cl as client} from '@src/api/utils/redis-server';

import log from '@src/api/utils/logger';

export const cacheBeerData = async (req:Request, res:Response, next:NextFunction) => {
    log.info('Inside cacheBeerData method of beerCacheData');

    const beer_name = req.params.beer_name;
    let results;
    try {
        const cacheResults = null;//await cl.get(beer_name);
        if(cacheResults){
            results = JSON.parse(cacheResults);
            res.send({
                data: results
            });
        }else {
            next();
        }
    }catch(error){
        log.error(error);
        res.status(404);
    }
}

