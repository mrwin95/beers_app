import { Express, NextFunction, Request, Response } from "express"
import log from '@src/api/utils/logger';
export const disablePowerBy = (req: Request, res: Response, next: NextFunction) => {
    
    log.info('body: ' + JSON.stringify(req.body));

    next();
}