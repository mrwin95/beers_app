import {Request, Response, NextFunction} from 'express';
// import client from '@src/api/utils/redis-server';
import redis from 'redis';
import log from '@src/api/utils/logger';

export const cacheBeerData = async (req:Request, res:Response, next:NextFunction) => {
    const beer_name = req.params.beer_name;
    let results;
    try {
        const cacheResults = await redis.createClient().get(beer_name);
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

