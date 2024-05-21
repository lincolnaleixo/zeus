import { MongoClient } from 'mongodb'

const user = process.env.MONGODB_USER
const databaseName = process.env.MONGODB_DB_NAME
const password = process.env.MONGODB_PASSWORD
const host = process.env.MONGODB_HOSTNAME
const port = process.env.MONGODB_PORT
const url = `mongodb://${user}:${password}@${host}:${port}` // MongoDB connection URL with credentials

export default async function connect () {
  const client = new MongoClient(url)

  try {
    await client.connect()
    console.log('Connected to database')

    const database = client.db(databaseName)
    return { client, db: database }
  } catch (error) {
    console.error('Connection to database failed:', error.message)
    throw error
  }
}
