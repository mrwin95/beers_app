import Log from '@src/api/models/log.model';
import logger from '@src/api/utils/logger';

export const addLog = async(log: any) => {
    logger.info('Inside addLog method of log.service.ts');
    let result: any;
    try{
        result = await new Log().save();
    }catch(err){
        logger.error(err);
        return null;
    }

    return result;
};