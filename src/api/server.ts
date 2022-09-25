import app from '@src/api/app';
import log from '@src/api/utils/logger';
import swaggerDocs from '@src/api/utils/swagger';
import {errorHandler} from '@src/api/utils/error-handler';
import connectDb from '@src/api/utils/mongodb';
const PORT: number = 3001;

process.on('uncaughtException', (error: Error) => {
    errorHandler.handleError(error);
    if (!errorHandler.isTrustedError(error)) {
        process.exit(1);
    }
});

process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
    throw reason;
});

app.listen(PORT, async () => {
    log.info(`Server running on port ${PORT}`);
    swaggerDocs(app, PORT);
    connectDb();
});