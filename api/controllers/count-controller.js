export default async function countDocuments (request, reply) {
  const { collection, query } = request.body
  try {
    const count = await request.server.database.collection(collection)
      .countDocuments(query)
    reply.send({ count })
  } catch (error) {
    request.server.log.error(error)
    reply.status(500)
      .send({ error: 'Unable to count documents' })
  }
}
