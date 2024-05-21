import aggregateDocuments from '../controllers/aggregate-controller.js'
import aggregateSchema from '../schemas/aggregate-schema.js'

export default async function (app) {
  app.post('/aggregate', {
    schema: aggregateSchema
  }, aggregateDocuments)
}
