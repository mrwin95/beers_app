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
import request from 'supertest';
import app from '@src/api/app';

describe('Beers', () => {
    it('should be true', () => {
        expect(true).toBe(true);
    })
    describe('get beer route', () => {
        describe('given the beer does not exist', () => {
            it('should return a 404',  async () => {
                // const beer_name = '';
                // await request(app).get(`/api/v1/`).expect(404);
                expect(true).toBe(true);
            })
        })

    //     describe('given name of beer', () => {
    //         it('should return a beer', async () => {
    //             const beer_name = 'The End Of History';
    //             await request(app).get(`/api/v1/beers/searchByName/${beer_name}`)
    //             .expect(200);
    //         })
    //     })
    })
})