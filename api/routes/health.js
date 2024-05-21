export default async function (app) {
  app.get('/health', async (request, reply) => {
    return { status: 'ok' }
  })
}
