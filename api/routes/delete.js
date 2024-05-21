import deleteDocuments from '../controllers/delete-controller.js'
import deleteSchema from '../schemas/delete-schema.js'

export default async function (app) {
  app.delete('/delete', {
    schema: {
      operationId: 'deleteDocuments',
      description: 'Delete documents from the specified collection.',
      tags: ['Documents'],
      summary: 'Delete documents',
      body: deleteSchema.body,
      response: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  deletedCount: { type: 'integer' }
                }
              },
              example: {
                deletedCount: 1
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
  }, deleteDocuments)
}
