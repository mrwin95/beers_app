import redis from 'redis';
import log from '@src/api/utils/logger';
// const client = redis.createClient();
// client.on('error', (err) => log.info('Error: ' + err));

// module.exports.cl= client;


const REDIS_HOST = process.env.REDIS_HOST ?? 'http://localhost';
const REDIS_PORT = parseInt(process.env.REDIS_PORT ?? '6379', 10);

// const redisApp = new redis(REDIS_PORT, REDIS_HOST);

// export { redisApp };