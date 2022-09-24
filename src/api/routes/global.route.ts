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

router.get('/', globalController.healthyCheck)

export default router;