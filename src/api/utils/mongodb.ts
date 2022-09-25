
import mongoose from "mongoose";
import {databaseUrl} from '@src/api/config/commons';
import log from '@src/api/utils/logger';

const connectDb = async () => {
    await mongoose.connect(databaseUrl!);
    log.info('Mongodb connected');
};

export default connectDb;