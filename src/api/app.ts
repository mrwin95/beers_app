import express, { Application} from 'express';
import dotenv from 'dotenv-safe';
import routes from '@src/api/routes';
import cors from 'cors';
import {validateHeader} from '@src/api/middleware/ValidateHeader.middleware';

dotenv.config({
    allowEmptyValues: true
});

let middleware = [validateHeader];
const app: Application = express();

const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use('/api/v1/',middleware, routes);

export default app;