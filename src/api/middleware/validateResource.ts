import { Request, Response, NextFunction } from 'express';
import {AnyZodObject} from 'zod';
import log from '@src/api/utils/logger';

export const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try{
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
    }catch(e: any){
        return res.status(400).send(e.errors);
    }
}

/**
 * The rule allow for whole request to server
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const rulesOfApi = (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-RequestWith, Content-Type, Accept, x-user');
    if(req.method == 'OPTIONS'){
        res.header('Access-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH')
        return res.status(200).json({});
    }

    next();
}

/**
 * Error handling
 * @param req 
 * @param res 
 * @param next 
 * @returns next
 */
export const errorHandler = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error('request not found');
    log.error(error);
    return res.status(400).json({message: error.message});
}
