import countDocuments from '../controllers/count-controller.js'
import countSchema from '../schemas/count-schema.js'

export default async function (app) {
  app.post('/count', {
    schema: countSchema
  }, countDocuments)
}
