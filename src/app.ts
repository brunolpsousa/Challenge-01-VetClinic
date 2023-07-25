import express from 'express'
import connectDB from './db/db'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (_: express.Request, res: express.Response) =>
  res.send('Hello, world!'),
)

const server = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}
server()
