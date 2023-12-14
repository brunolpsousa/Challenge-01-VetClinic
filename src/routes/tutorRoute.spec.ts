import { beforeAll, afterAll, describe, expect, it } from 'vitest'
import { disconnect, Types } from 'mongoose'
import connectDB from '../db/db'
import express from 'express'
import supertest from 'supertest'
import {
  createTutor,
  getAllTutors,
  deleteTutor,
  replaceTutor,
  modifyTutor,
} from '@controllers/tutorController'

const { DB_HOST, DB_PORT } = process.env
const id = new Types.ObjectId().toString()
const app = express()

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

afterAll(async () => {
  await disconnect()
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
      .then((res: any) => {
        expect(res.body.name).toBe(baseTutor.name)
        expect(res.body.email).toBe(baseTutor.email)
        expect(res.body.date_of_birth).toBe(baseTutor.date_of_birth)
        expect(res.body.zip_code).toBe(baseTutor.zip_code)
      })
  })

  it('should replace Tutor - 200', async () => {
    const hasBaseKeys = (res: any) => {
      if (!('name' in res.body)) throw new Error('name not found')
      if (!('email' in res.body)) throw new Error('email not found')
      if (!('date_of_birth' in res.body))
        throw new Error('date_of_birth not found')
      if (!('zip_code' in res.body)) throw new Error('zip_code not found')
    }
    await supertest(app)
      .put(`/tutor/${id}`)
      .send(baseTutor)
      .expect('Content-Type', /json/)
      .expect(hasBaseKeys)
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
