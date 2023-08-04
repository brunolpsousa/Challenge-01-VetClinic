import express from 'express'

import connectDB from '@db/db'

import errorHandler from '@middleware/errorMiddleware'

import petRoute from '@routes/petRoute'
import tutorRoute from '@routes/tutorRoute'
import swaggerRoute from '@routes/swaggerRoute'

require('dotenv').config()

const { DB_PORT, DB_HOST, DB_NAME } = process.env
const PORT = process.env.PORT || 5000
const URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

const app = express()
app.use(express.json())

app.use(swaggerRoute)
app.use(petRoute)
app.use(tutorRoute)

app.use((_: express.Request, res: express.Response) =>
  res.status(404).send('Route does not exist'),
)
app.use(errorHandler)

const server = async () => {
  try {
    await connectDB(URI)
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}
server()
