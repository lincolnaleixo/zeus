export default async function distinctDocuments (request, reply) {
  const { collection, field, query } = request.body
  try {
    const distinctValues = await request.server.database.collection(collection)
      .distinct(field, query)
    reply.send(distinctValues)
  } catch (error) {
    request.server.log.error(error)
    reply.status(500)
      .send({ error: 'Unable to fetch distinct values' })
  }
}
