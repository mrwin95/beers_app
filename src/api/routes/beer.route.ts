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

import exprress from 'express';
import BeerController from '@src/api/controllers/beer.controller';

const router = exprress.Router();

router.get('/beers', BeerController.getListOfBeers);
router.get('/beers/searchByName', BeerController.searchByName);

export default router;

