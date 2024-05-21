import fastifyCors from '@fastify/cors'

export default async function (app) {
  app.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
}
