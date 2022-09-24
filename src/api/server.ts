import app from '@src/api/app';
import log from '@src/api/utils/logger';
import swaggerDocs from '@src/api/utils/swagger';
const PORT: number = 3001;

app.listen(PORT, async () => {
    log.info(`Server running on port ${PORT}`);
    swaggerDocs(app, PORT);
});