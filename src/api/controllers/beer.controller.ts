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

import { Request, Response } from "express";
import {searchByBeerName} from '@src/api/config/axios-config';
import log from '@src/api/utils/logger';
import axios from 'axios';
const beers: [] = [];

const beerControllers = {

    async searchByName(req: Request, res: Response) {
        const beer_name:any = req.query.beer_name;      
        log.info('Search name: ' + beer_name);  
        const beerResponse = await axios.get(searchByBeerName(beer_name));
        log.info('response: ' + beerResponse.data);
        res.status(200).json({
            status: 'success',
            data: beerResponse.data
        })
    },
    /**
     * 
     * @param req 
     * @param res 
     */
    getListOfBeers(req: Request, res: Response){
        res.status(200).json({
            status: 'sucess',
            message: 'load product'
        })
    }
}

export default beerControllers;