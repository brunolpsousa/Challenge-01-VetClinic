import { expectTypeOf, it } from 'vitest'
const { DB_HOST, DB_PORT } = process.env
import connectDB from './db'

it('should connect to db', async () => {
  const mongo = await connectDB(`mongodb://${DB_HOST}:${DB_PORT}/test`)
  mongo.disconnect()
  expectTypeOf(mongo).toBeObject()
})
