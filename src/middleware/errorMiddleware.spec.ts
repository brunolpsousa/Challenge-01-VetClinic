import { describe, expect, it } from 'vitest'
import { createCustomError } from './errorMiddleware'
import errorHandler from './errorMiddleware'
import express from 'express'
import supertest from 'supertest'

const app = express()

app.get('/', () => {
  throw createCustomError(204, 'test: no content')
})
app.use(errorHandler)

describe('Error handler', () => {
  it('should throw error', () => {
    const err = () => {
      throw createCustomError(1, 'test error')
    }
    expect(err).toThrowError('test error')
  })

  it('should return custom error', async () => {
    await supertest(app).get('/').expect(204)
  })

  it('shoud have custom message', () => {
    try {
      throw createCustomError(2, 'another test')
    } catch (e: any) {
      expect(e.message).toBe('another test')
    }
  })
})
