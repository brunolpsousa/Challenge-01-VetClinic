import express from 'express'
import connectDB from './db/db'
import errorHandler from './middleware/errorHandler'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(errorHandler)
app.use((_: express.Request, res: express.Response) =>
  res.status(404).send('Route does not exist'),
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
