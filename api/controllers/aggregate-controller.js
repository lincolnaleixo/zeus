export default async function aggregateDocuments (request, reply) {
  const { collection, pipeline } = request.body
  try {
    const results = await request.server.database.collection(collection)
      .aggregate(pipeline)
      .toArray()
    reply.send(results)
  } catch (error) {
    request.server.log.error(error)
    reply.status(500)
      .send({ error: 'Unable to perform aggregation' })
  }
}
