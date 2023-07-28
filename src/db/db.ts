import { connect, ConnectOptions } from 'mongoose'
const { DB_HOST, DB_PORT, DB_NAME } = process.env

export default async () => {
  return await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
}
