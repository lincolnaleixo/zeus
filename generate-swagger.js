import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import app from './app.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function generateSwagger () {
  await app.ready()

  const swagger = app.swagger()
  const filePath = path.join(__dirname, 'swagger.json')

  fs.writeFileSync(filePath, JSON.stringify(swagger, null, 2))
  console.log(`Swagger documentation saved to ${filePath}`)
}

try {
  await generateSwagger()
  process.exit(0)
} catch (error) {
  console.error('Error generating Swagger documentation:', error)
  process.exit(1)
}
