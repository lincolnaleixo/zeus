import fastifySwagger from '@fastify/swagger'

export default async function registerSwagger (app) {
  await app.register(fastifySwagger, {
    mode: 'dynamic',
    swagger: {
      info: {
        title: 'Zeus API',
        description: 'API documentation for Zeus API',
        version: '1.0.0'
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'x-api-key',
          in: 'header',
          description: 'API key to access the endpoints'
        }
      },
      security: [{ apiKey: [] }]
    },
    exposeRoute: false // Do not expose Swagger UI
  })
}
