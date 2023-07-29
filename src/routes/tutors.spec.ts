import {
  createTutor,
  getAllTutors,
  deleteTutor,
  replaceTutor,
  modifyTutor,
} from '../controllers/tutor'
import { beforeAll, describe, it } from 'vitest'
import { v4 } from 'uuid'
import connectDB from '../db/db'
import express from 'express'
import supertest from 'supertest'

const app = express()
const { DB_HOST, DB_PORT } = process.env

const id = v4().split('-')[4]

const baseTutor = {
  _id: id,
  name: 'John Doe',
  phone: '5500998765432',
  email: 'example@email.com',
  date_of_birth: '1993-12-12T10:10:00.000Z',
  zip_code: '617600000',
}

beforeAll(async () => {
  await connectDB(`mongodb://${DB_HOST}:${DB_PORT}/test`)
})

app.use(express.json())

app.get('/tutors', getAllTutors)
app.post('/tutor', createTutor)
app.route('/tutor/:id').put(replaceTutor).patch(modifyTutor).delete(deleteTutor)

describe('Tutor routes', () => {
  it('should get all Tutors - 200', async () => {
    await supertest(app)
      .get('/tutors')
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('should create Tutor - 201', async () => {
    await supertest(app)
      .post('/tutor')
      .send(baseTutor)
      .expect('Content-Type', /json/)
      .expect(201)
  })

  it('should replace Tutor - 200', async () => {
    await supertest(app)
      .put(`/tutor/${id}`)
      .send(baseTutor)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('should modify Tutor - 200', async () => {
    await supertest(app)
      .patch(`/tutor/${id}`)
      .send(baseTutor)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('should delete Tutor - 200', async () => {
    await supertest(app).delete(`/tutor/${id}`).send(baseTutor).expect(200)
  })
})
