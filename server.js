import connect from './api/services/database.js'
import app from './app.js'

const PORT = process.env.API_PORT || 3000

async function closeGracefully (client, signal) {
  console.log(`Received signal to terminate: ${signal}`)
  try {
    await app.close()
    await client.close()
    process.exit(0)
  } catch (error) {
    console.error(`Error during shutdown: ${error}`)
    process.exit(1)
  }
}

async function startServer () {
  const { client, db } = await connect()

  app.decorate('mongo', { client, db })
  app.decorate('database', db)

  process.on('SIGINT', () => closeGracefully(client, 'SIGINT'))
  process.on('SIGTERM', () => closeGracefully(client, 'SIGTERM'))

  app.listen({ port: PORT, host: '0.0.0.0' }, (error, address) => {
    if (error) {
      console.error(error)
      throw error
    }
    console.log(`Database-API is running on port ${PORT}`)
  })
}

try {
  await startServer()
} catch (error) {
  console.error('Error starting server:', error)
  throw error
}
