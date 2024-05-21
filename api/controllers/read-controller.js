export default async function readDocuments (request, reply) {
  const { collection, query, projection, limit, skip } = request.body
  try {
    const cacheKey = `${collection}-${JSON.stringify(query)}-${JSON.stringify(projection)}-${limit}-${skip}`
    const cacheExpiry = Number.parseInt(process.env.REDIS_CACHE_EXPIRY, 10)

    // Check cache
    const cachedResult = await request.server.redis.get(cacheKey)
    if (cachedResult) {
      console.log('Cache hit')
      return reply.send(JSON.parse(cachedResult))
    }

    // Debug logging
    request.server.log.info(`Reading documents from ${collection} with query: ${JSON.stringify(query)} and projection: ${JSON.stringify(projection)}`)

    // Fetch from database
    const results = await request.server.database.collection(collection)
      .find(query)
      .project(projection || {}) // Ensure projection is set correctly
      .limit(Number(limit))
      .skip(Number(skip))
      .toArray()

    // Cache the result
    await request.server.redis.set(cacheKey, JSON.stringify(results), {
      EX: cacheExpiry // Cache expiration time in seconds
    })

    reply.send(results)
  } catch (error) {
    request.server.log.error(error) // Log the error for debugging
    reply.status(500)
      .send({ error: 'Unable to fetch documents' })
  }
}
