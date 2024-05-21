import upsertDocument from '../controllers/upsert-controller.js'
import upsertSchema from '../schemas/upsert-schema.js'

export default async function (app) {
  app.post('/upsert', {
    schema: {
      operationId: 'upsertDocument',
      description: 'Upsert a document in the specified collection.',
      tags: ['Documents'],
      summary: 'Upsert document',
      body: upsertSchema.body,
      response: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  upsertedCount: { type: 'integer' },
                  matchedCount: { type: 'integer' },
                  modifiedCount: { type: 'integer' }
                }
              },
              example: {
                upsertedCount: 1,
                matchedCount: 1,
                modifiedCount: 1
              }
            }
          }
        },
        400: {
          description: 'Invalid request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' }
                }
              },
              example: {
                error: 'Invalid input data'
              }
            }
          }
        },
        401: {
          description: 'Unauthorized',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' }
                }
              },
              example: {
                error: 'Unauthorized access'
              }
            }
          }
        },
        500: {
          description: 'Internal server error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' }
                }
              },
              example: {
                error: 'An internal server error occurred'
              }
            }
          }
        }
      },
      security: [{ apiKey: [] }]
    }
  }, upsertDocument)
}
