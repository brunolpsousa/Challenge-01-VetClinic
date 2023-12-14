import { beforeAll, afterAll, describe, it } from 'vitest'
import { createTutor, deleteTutor } from '@controllers/tutorController'
import { disconnect, Types } from 'mongoose'
import express from 'express'
import supertest from 'supertest'
import connectDB from '@db/db'
import {
  createPet,
  getPet,
  deletePet,
  replacePet,
  modifyPet,
} from '@controllers/petController'

const { DB_HOST, DB_PORT } = process.env
const app = express()

const petId = new Types.ObjectId().toString()
const tutorId = new Types.ObjectId().toString()

const baseTutor = {
  _id: tutorId,
  name: 'John Doe',
  phone: '5500998765432',
  email: 'example@email.com',
  date_of_birth: '1993-12-12T10:10:00.000Z',
  zip_code: '617600000',
  pets: {
    _id: petId,
    name: 'Lilo',
    species: 'dog',
    carry: 's',
    weight: 5,
    date_of_birth: '1993-12-12T10:10:00.000Z',
  },
}

beforeAll(async () => {
  await connectDB(`mongodb://${DB_HOST}:${DB_PORT}/test`)
  await supertest(app)
    .post('/tutor')
    .send(baseTutor)
    .expect('Content-Type', /json/)
    .expect(201)
})

afterAll(async () => {
  await supertest(app).delete(`/tutor/${tutorId}`).expect(200)
  await disconnect()
})

app.use(express.json())

app.post('/tutor', createTutor)
app.delete('/tutor/:id', deleteTutor)
app.post('/pet/:tutorId', createPet)
app
  .route('/pet/:petId/tutor/:tutorId')
  .get(getPet)
  .put(replacePet)
  .patch(modifyPet)
  .delete(deletePet)

describe('Pet routes', () => {
  it('should get Pet - 200', async () => {
    await supertest(app)
      .get(`/pet/${petId}/tutor/${tutorId}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('should create Pet - 201', async () => {
    await supertest(app)
      .post(`/pet/${tutorId}`)
      .send(baseTutor.pets)
      .expect('Content-Type', /json/)
      .expect(201)
  })

  it('should replace Pet - 200', async () => {
    await supertest(app)
      .put(`/pet/${petId}/tutor/${tutorId}`)
      .send(baseTutor.pets)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('should modify Pet - 200', async () => {
    await supertest(app)
      .patch(`/pet/${petId}/tutor/${tutorId}`)
      .send(baseTutor.pets)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('should delete Pet - 200', async () => {
    await supertest(app).delete(`/pet/${petId}/tutor/${tutorId}`).expect(200)
  })
})
