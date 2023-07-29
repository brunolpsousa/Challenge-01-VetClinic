import express from 'express'
import connectDB from './db/db'
import errorHandler from './middleware/errorHandler'
import petsRouter from './routes/pets'
import tutorsRouter from './routes/tutors'
require('dotenv').config()

const app = express()
const { DB_PORT, DB_HOST, DB_NAME } = process.env
const PORT = process.env.PORT || 3000
const URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

app.use(express.json())

app.use(petsRouter)
app.use(tutorsRouter)

app.use(errorHandler)
app.use((_: express.Request, res: express.Response) =>
  res.status(404).send('Route does not exist'),
)

const server = async () => {
  try {
    await connectDB(URI)
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}
server()
