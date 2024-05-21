import Fastify from 'fastify'
import registerErrorHandler from './api/middlewares/error-handler.js'
import { registerRateLimit } from './api/middlewares/rate-limit.js'
import registerCors from './api/plugins/cors.js'
import registerHelmet from './api/plugins/helmet.js'
import registerSwagger from './api/plugins/swagger.js'
import checkApiKey from './api/pre-handlers/check-api-key.js'
import registerRoutes from './api/routes/index.js'
import './api/services/config.js'

import { connectRedis, redisClient } from './api/services/redis.js'

const app = Fastify()

await connectRedis(process.env.REDIS_HOSTNAME, process.env.REDIS_PORT)
app.decorate('redis', redisClient)

await registerCors(app)
await registerHelmet(app)
await registerRateLimit(app)
await registerSwagger(app)

await checkApiKey(app)
await registerRoutes(app)

registerErrorHandler(app)

export default app
