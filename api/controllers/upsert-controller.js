export default async function upsertDocument (request, reply) {
  const { collection, document, uniqueKey } = request.body
  const key = { [uniqueKey]: document[uniqueKey] }
  try {
    const result = await request.server.database.collection(collection)
      .updateOne(key, { $set: document }, { upsert: true })
    reply.send(result)
  } catch (error) {
    request.server.log.error(error) // Log the error for debugging
    reply.status(500)
      .send({ error: 'Unable to upsert document' })
  }
}
