import fastifyHelmet from '@fastify/helmet'

export default async function (app) {
  app.register(fastifyHelmet, {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'img-src': ["'self'", 'data:'],
        'script-src': ["'self'"],
        'default-src': ["'self'"]
      }
    }
  })
}
