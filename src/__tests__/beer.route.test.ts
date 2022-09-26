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
import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';

describe('Beer route', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    })

    afterAll(async() => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });
    describe('get beer route', () => {
        describe('given empty beer name', () => {
            it('should return a 400',  async () => {
                const beer_name = '';
                const {body, status} = await request(app).get(`/api/v1/beers/searchByName/${beer_name}`)
                .set('x-user', 'thang@gmail.com')
                .expect(400);                
            })
        })

        describe('given a name of beer', () => {
            it('should return a 200 status and a beer', async () => {
                const beer_name = 'The End Of History';
                const {body, status} = await request(app).get(`/api/v1/beers/searchByName`)
                .query({'beer_name':beer_name})
                .set('x-user', 'thang@gmail.com')
                .expect(200);                   
            })
        })
    })
})