import redis from 'redis';
import log from '@src/api/utils/logger';
// let redisClient: redis;

let client;// = redis.createClient();

// await client.connect();
(async () => {
    client = redis.createClient();
    client.on("error", (error) => log.info(`Error: ${error}`));
    await client.connect();
});

// client.on("error", (error) => log.info(`Error: ${error}`));
// client.on("connect", () => log.info(`connected to redis!`))
export default client;