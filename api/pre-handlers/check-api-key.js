export async function checkApiKeyWithRateLimit (request, reply) {
  const apiKey = request.headers['x-api-key']
  if (!apiKey || apiKey !== process.env.API_KEY) {
    // Apply rate limit for incorrect API key attempts
    const ip = request.ip
    const redisClient = request.server.redis

    const current = await redisClient.incr(ip)
    if (current === 1) await redisClient.expire(ip, 3600) // Expire key in 1 hour

    if (current > 5) {
      reply.status(429)
        .send({
          statusCode: 429,
          error: 'Too Many Requests',
          message: 'You have reached the maximum number of attempts. Please try again in 1 hour.'
        })
      return true
    }
    reply.status(401)
      .send({ error: 'Unauthorized' })
    return true
  }
  return false
}

export default async function checkApiKey (app) {
  app.addHook('preHandler', async (request, reply) => {
    const rateLimitExceeded = await checkApiKeyWithRateLimit(request, reply)
    if (rateLimitExceeded) {
      return reply
    }
  })
}
