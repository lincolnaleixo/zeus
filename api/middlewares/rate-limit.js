import rateLimit from '@fastify/rate-limit'

export async function registerRateLimit (app) {
  await app.register(rateLimit, {
    max: 10_000, // General rate limit for all requests
    timeWindow: '1 minute', // Time window for general rate limit
    keyGenerator: (request) => request.ip, // Rate limit based on IP address
    skipOnError: true // Do not apply rate limiting on errors
  })
}
