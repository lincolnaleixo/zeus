import createDocument from '../controllers/create-controller.js'
import createSchema from '../schemas/create-schema.js'

export default async function (app) {
  app.post('/create', {
    schema: {
      operationId: 'createDocument',
      description: 'Create a new document in the specified collection.',
      tags: ['Documents'],
      summary: 'Create a document',
      body: createSchema.body,
      response: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  insertedId: { type: 'string' }
                }
              },
              example: {
                insertedId: '60f7aaf5b1e4c112d8e3e5d2'
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
  }, createDocument)
}
