import Log from '@src/api/models/log.model';
import logger from '@src/api/utils/logger';

/**
 * The method save the log to database
 * @param log 
 * @returns the log has been stored to database
 */
export const addLog = async(log: any) => {
    logger.info('Inside addLog method of log.service.ts');
    let result: any;
    try{
        result = await new Log().save().then((log:any) => {
                logger.info(log);
        });
    }catch(err){
        logger.error(err);
        return null;
    }

    return result;
};