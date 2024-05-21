import updateDocuments from '../controllers/update-controller.js'
import updateSchema from '../schemas/update-schema.js'

export default async function (app) {
  app.put('/update', {
    schema: {
      operationId: 'updateDocuments',
      description: 'Update documents in the specified collection.',
      tags: ['Documents'],
      summary: 'Update documents',
      body: updateSchema.body,
      response: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  matchedCount: { type: 'integer' },
                  modifiedCount: { type: 'integer' }
                }
              },
              example: {
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
  }, updateDocuments)
}
