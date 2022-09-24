import app from '@src/api/app';
import log from '@src/api/utils/logger';
const PORT: number = 3001;

app.listen(PORT, () => log.info(`Server running on port ${PORT}`));