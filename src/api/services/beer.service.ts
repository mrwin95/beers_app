import {BeerDTO} from '@src/api/dto/Beer.dto';
import axios, { AxiosError } from 'axios';
import {searchByBeerName} from '@src/api/config/axios-config';
import log from '@src/api/utils/logger';
import { Beer } from '../models/beer.model';

let beers: Beer[] = [];

export const getBeerByName = async (name:string) => {
    log.info('inside getBeerByName method of the beer.service');
    try{
        const {data} = await axios.get<Beer[]>(searchByBeerName(name),{
            headers: {
              Accept: 'application/json',
            },
          });          
          data.map((beer) => {
            let b: Beer = {
              id: beer.id,
              name: beer.name,
              description: beer.description,
              first_brewed: beer.first_brewed,
              food_pairings: beer.food_pairings
            }

            beers.push(b);
          });      
        return beers;
    }catch(error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
          } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
          }
    }
    
}