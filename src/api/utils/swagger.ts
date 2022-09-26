import {Application, Express, Request, Response} from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {version} from '../../../package.json';
import log from '@src/api/utils/logger';
import {addHeaderForDocs} from '@src/api/middleware/validateHeader';
const options: swaggerJSDoc.Options = {
    definition: {                
        openapi: "3.0.0",
        info: {
            title: 'Beer REST API Docs',
            version,
            contact: {
                name: 'Thang Nguyen',
                email: 'mrwin95@gmail.com',
                url: 'http://winca.ca'
            },            
        },        
        servers: [
            {
              url: 'http://localhost:3001/api/v1',
              description: 'Development server',
            },
          ],        
    },        
    apis: ["./src/api/routes/*.ts"]    
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app: Application, port: number) {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        // req.set
        res.send(swaggerSpec);
    });

    log.info(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;