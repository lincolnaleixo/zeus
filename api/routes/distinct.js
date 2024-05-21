import distinctDocuments from '../controllers/distinct-controller.js'
import distinctSchema from '../schemas/distinct-schema.js'

export default async function (app) {
  app.post('/distinct', {
    schema: distinctSchema
  }, distinctDocuments)
}
