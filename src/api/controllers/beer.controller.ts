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
import validator from 'validator';
const beerControllers = {

    async searchByName(req: Request, res: Response) {
        log.info('Inside searchByName method of beer.controller');
        const beer_name:any = req.query.beer_name || "";      
        log.info('Search name: ' + (req.query.beer_name || ""));          
        try{
            const beers:any = await getBeerByName(beer_name);   
            if(!validator.isEmpty(beer_name)){
                res.status(200).json({
                    status: 'success',
                    data: beers
                })
            }else {
                res.status(400).json({
                    status: 'failed',
                    data: beers
                })
            }            
        }catch(err: any){           
            res.status(400).json({
                status: err.data,
                message: 'Data unavailable',
                error: err
            })
        }
    },

}

export default beerControllers;