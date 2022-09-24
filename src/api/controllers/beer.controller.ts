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
import axios, { AxiosError } from 'axios';
import {Beer} from '@src/api/models/beer.model';
import {getBeerByName} from '@src/api/services/beer.service';

// let beers: Beer[] = [];

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
            const errors = err as Error | AxiosError;
            if(!axios.isAxiosError(errors)){
                log.error(errors);
            }
            res.status(400).json({
                status: 'failed',
                message: 'Data unavailable',
                error: errors
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