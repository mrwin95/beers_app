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
import log from '@src/api/utils/logger';
import {getBeerByName} from '@src/api/services/beer.service';

const beerControllers = {

    async searchByName(req: Request, res: Response) {
        const beer_name:any = req.params.beer_name;      
        log.info('Search name: ' + req.params.beer_name);  
        try{
            const beers = await getBeerByName(beer_name);                  
            res.status(200).json({
                status: 'success',
                data: beers
            })
        }catch(err){           
            res.status(400).json({
                status: 'failed',
                message: 'Data unavailable',
                error: err
            })
        }
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