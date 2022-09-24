/*
 * Project: c:\Users\tnguyen\interviews\beers_app
 * Created Date: <<filecreated('dddd MMMM Do YYYY'
 * Author: Thang         

Thang Nguyen
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 Your Company
 */

import express, {Request, Response} from 'express';
import globalController from '@src/api/controllers/global.controller';

const router = express.Router();
router.get('/api', (req: Request, res: Response) => {
    res.send('API online');
});

/**
 * @openapi
 * /health-check:
 *  get: 
 *   description: Responds when the app is up and running
 *   responses:
 *      200:
 *        description: App is up and running
 */

router.get('/health-check', globalController.healthyCheck)

export default router;