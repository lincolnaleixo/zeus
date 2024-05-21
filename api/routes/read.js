import readDocuments from '../controllers/read-controller.js'
import readSchema from '../schemas/read-schema.js'

export default async function (app) {
  app.post('/read', {
    schema: {
      operationId: 'readDocuments',
      description: 'Read documents from the specified collection.',
      tags: ['Documents'],
      summary: 'Read documents',
      body: readSchema.body,
      response: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: { type: 'string' },
                    name: { type: 'string' }, // Add other properties as needed
                    email: { type: 'string' } // Add other properties as needed
                  }
                }
              },
              example: [
                {
                  _id: '60f7aaf5b1e4c112d8e3e5d2',
                  name: 'Sample Document',
                  email: 'sample@example.com',
                  description: 'This is a sample document.'
                }
              ]
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
                error: 'Invalid query parameters'
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
  }, readDocuments)
}
