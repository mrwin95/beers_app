import {Express, Request, Response} from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {version} from '../../../package.json';

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Beer REST API Docs',
            version
        }
    },
    apis: ["../routes.ts"]
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app: Express) {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });   
}