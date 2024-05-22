export default async function createDocument (request, reply) {
  const { collection, document } = request.body
  try {
    const result = await request.server.database.collection(collection)
      .insertOne(document)
    reply.send(result)
  } catch (error) {
    request.server.log.error(error)
    reply.status(500)
      .send({ error: 'Unable to insert document' })
  }
}
