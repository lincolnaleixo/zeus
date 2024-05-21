export default async function deleteDocuments (request, reply) {
  const { collection, query } = request.body
  try {
    const result = await request.server.database.collection(collection)
      .deleteMany(query)
    reply.send(result)
  } catch (error) {
    request.server.log.error(error) // Log the error for debugging
    reply.status(500)
      .send({ error: 'Unable to delete documents' })
  }
}
