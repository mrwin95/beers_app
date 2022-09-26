import express, {Request, Response, NextFunction} from 'express';
import log from '@src/api/utils/logger';
import {addLog} from '@src/api/services/log.service';
import Log from '@src/api/models/log.model';

/**
 * Validating header should have a x-user in request header
 * verify that header param is a valid email
 * @param req 
 * @param res 
 * @param next 
 */
export const validateHeader = (req: Request, res: Response, next: NextFunction) =>{
    
    log.info('url' + req.baseUrl + req.path);
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    if(!req.headers || !req.headers['x-user']){
        log.info('Missing x-user from the header')
        res.statusCode = 400;
        res.json({
            error: 'Missing x-user from the header'
        });
    }
    if(req.headers && req.headers['x-user'] && !expression.test(req.headers['x-user'].toString())){
        log.info('x-user is not a valid email')
        res.statusCode = 400;
        res.json({
            error: 'x-user is not a valid email'
        });
    }
    if(req.headers && req.headers['x-user']){
        log.info('add log details to db');
        let details = `${req.headers['x-user']} - ${req.hostname}: ${req.method} - ${req.path} - ${req.statusCode}`;   
        let logObject:any = new Log({
            userId: req.headers['x-user'],
            logTime: new Date(),
            details: details
        });
        addLog(logObject);
    }
    
    next();
    
}

export const addHeaderForDocs = (req: Request, res: Response, next: NextFunction) =>{
    const header = {
        'x-user': 'thang@gmail.com'
    };

    log.info(req.headers);

    if(!req.headers){
        // req.headers = new Headers(header);
    }
}