import { createClient } from 'redis'

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOSTNAME}:${process.env.REDIS_PORT}`
})

redisClient.on('error', (error) => console.error('Redis Client Error', error))

export async function connectRedis () {
  await redisClient.connect()
  console.log('Connected to Redis')
}

export { redisClient }
