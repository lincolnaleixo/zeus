export default function registerErrorHandler (app) {
  app.setErrorHandler((error, request, reply) => {
    app.log.error(error)
    reply.status(error.statusCode || 500)
      .send({
        error: error.message || 'An internal server error occurred'
      })
  })
}
