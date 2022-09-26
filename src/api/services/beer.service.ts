import axios, { AxiosError } from 'axios';
import {searchByBeerName} from '@src/api/config/axios-config';
import log from '@src/api/utils/logger';
import { Beer } from '../models/beer.model';
import { redis} from '@src/api/utils/redis-server';

let beers: Beer[] = [];

/**
 * The method get a beer by name of the beer
 * @param name name of the beer need to search
 * @returns the list(s) of the beer has matched with search key
 */
export const getBeerByName = async (name:string) => {
  beers = [];
    log.info('inside getBeerByName method of the beer.service');
    try{
      const rawCacheData = await redis.get(name);
        if(rawCacheData){
          const cachedData = JSON.parse(rawCacheData) as Beer[];
          beers = cachedData;
        }else {
          const {data} = await axios.get<Beer[]>(searchByBeerName(name),{
            headers: {
              Accept: 'application/json',
            },
          });         
          data.map((beer:any) => {            
            let b: Beer = {
              id: beer.id,
              name: beer.name,
              description: beer.description,
              first_brewed: beer.first_brewed,
              food_pairings: beer.food_pairing
            }            
            beers.push(b);
          });
          redis.set(name, JSON.stringify(beers));
        }
                  
        return beers;
    }catch(error){
        if (axios.isAxiosError(error)) {                                    
            return error.response?.data;
          } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
          }
    }    
}