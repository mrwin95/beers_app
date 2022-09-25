
import mongoose from "mongoose";
import {databaseUrl, username, password} from '@src/api/config/commons';
import log from '@src/api/utils/logger';

const connectDb = async () => {
    log.info('Attempting MongoDB connection (will retry if needed)');
    await mongoose.connect(databaseUrl!)
    .then(() => log.info('Mongodb connected'))
    .catch((err) => {
        const retrySeconds = 5;
        log.info('Mongodb error', err);
    });    
};

export default connectDb;