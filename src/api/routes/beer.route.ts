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

import express from 'express';
import BeerController from '@src/api/controllers/beer.controller';
import { cacheBeerData } from '../middleware/beerCacheData';
const router = express.Router();

router.get('/beers', BeerController.getListOfBeers);

/**
 * @openapi
 * /beers:
 *  get:
 *    description: Responds when the app is up and running
 *    responses:
 *      '200':
 *       description: App is up and running
 */
router.get('/beers/searchByName/:beer_name',cacheBeerData, BeerController.searchByName);

export default router;

