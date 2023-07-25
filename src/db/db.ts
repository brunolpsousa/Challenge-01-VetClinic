import mongoose from 'mongoose'
const { DB_HOST, DB_PORT, DB_NAME } = process.env

export default async function () {
  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
}
