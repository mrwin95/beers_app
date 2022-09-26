import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';

/**
 * The test of the rating service
 */
describe('Rating service', () => {

    beforeAll(async() => {
        const mongoServer = await MongoMemoryServer.create();
        mongoose.connect(mongoServer.getUri());        
    });

    afterAll(async() => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    describe('addRating with ', () => {
        
    })

    test('', () => {
        expect(true).toBe(true);
    })
});