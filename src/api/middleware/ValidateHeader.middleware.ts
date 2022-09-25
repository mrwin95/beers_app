import express, {Request, Response, NextFunction} from 'express';
import log from '@src/api/utils/logger';
export const validateHeader = (req: Request, res: Response, next: NextFunction) =>{
    
    const xUser = req.headers['x-user'];
    log.info(`In header of request: ${xUser}`);
    if(xUser == '' || xUser === undefined) {
        res.status(404).json({
            status: 'failed',
            message: 'the header x-user was missing'
        });
    }else {        
        if(xUser.indexOf('@') === -1){
            res.status(404).json({
                status: 'failed',
                message: `The ${xUser} is not an email`
            });            
        }else {
            next();
        }        
    }
    next();
}