import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv-safe';
import routes from '@src/api/routes';

dotenv.config({
    allowEmptyValues: true
});

const app: Application = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/v1/',routes);

export default app;