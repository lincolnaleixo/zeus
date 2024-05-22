export default async function updateDocuments (request, reply) {
  const { collection, query, update, options } = request.body
  try {
    const result = await request.server.database.collection(collection)
      .updateMany(query, update, options)
    reply.send(result)
  } catch (error) {
    request.server.log.error(error)
    reply.status(500)
      .send({ error: 'Unable to update documents' })
  }
}
