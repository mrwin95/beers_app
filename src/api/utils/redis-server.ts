import Redis from 'ioredis'
import log from '@src/api/utils/logger';
const REDIS_HOST = process.env.REDIS_HOST ?? 'localhost';
const REDIS_PORT = parseInt(process.env.REDIS_PORT ?? '6379', 10);
const redis = new Redis(REDIS_PORT, REDIS_HOST);

export {redis};
