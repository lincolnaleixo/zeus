import aggregateRoute from './aggregate.js'
import countRoute from './count.js'
import createRoute from './create.js'
import deleteRoute from './delete.js'
import distinctRoute from './distinct.js'
import readRoute from './read.js'
import updateRoute from './update.js'
import upsertRoute from './upsert.js'

export default async function (app) {
  await app.register(aggregateRoute)
  await app.register(countRoute)
  await app.register(createRoute)
  await app.register(deleteRoute)
  await app.register(distinctRoute)
  await app.register(readRoute)
  await app.register(updateRoute)
  await app.register(upsertRoute)
}
