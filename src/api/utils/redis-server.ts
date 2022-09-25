import redis from 'redis';
import log from '@src/api/utils/logger';
const client = redis.createClient();
client.on('error', (err) => log.info('Error: ' + err));

module.exports.cl= client;