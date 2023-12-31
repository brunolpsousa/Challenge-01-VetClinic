import { beforeAll, afterAll, describe, expect, expectTypeOf, it } from 'vitest'
import { disconnect } from 'mongoose'
import connectDB from '@db/db'
import Tutor from './tutorModel'

const { DB_HOST, DB_PORT } = process.env

const baseTutor = {
  name: 'John Doe',
  phone: '5500998765432',
  email: 'example@email.com',
  date_of_birth: '1993-12-12T10:10:00.000Z',
  zip_code: '617600000',
  pets: {
    name: 'Lilo',
    species: 'dog',
    carry: 's',
    weight: 5,
    date_of_birth: '1993-12-12T10:10:00.000Z',
  },
}

beforeAll(async () => {
  await connectDB(`mongodb://${DB_HOST}:${DB_PORT}/test`)
})

afterAll(async () => {
  const res = await Tutor.deleteMany({})
  console.log('Deleted pets count:', res.deletedCount)
  await disconnect()
})

describe('Pet Name', () => {
  it('should fail with an empty name', async () => {
    const newTutor = () => {
      baseTutor.pets.name = ''
      return new Tutor(baseTutor, { runValidators: true }).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: pets.0.name: must provide name',
    )
  })

  it('should fail when name has more than 30 characters', async () => {
    const newTutor = () => {
      baseTutor.pets.name = '1234567891113151719212325272930'
      return new Tutor(baseTutor, { runValidators: true }).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: pets.0.name: maximum 30 characters',
    )
  })

  it('should return an object', async () => {
    const newTutor = async () => {
      baseTutor.pets.name = 'Lilo'
      return await Tutor.create(baseTutor)
    }
    const tutor = await newTutor()
    expectTypeOf(tutor).toBeObject()
  })
})

describe('Pet Species', () => {
  it('should fail with an empty species', async () => {
    const newTutor = () => {
      baseTutor.pets.species = ''
      return new Tutor(baseTutor).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: pets.0.species: Path `species` is required.',
    )
  })

  it('should return an object', async () => {
    const newTutor = async () => {
      baseTutor.pets.species = 'dog'
      return await Tutor.create(baseTutor)
    }
    const tutor = await newTutor()
    expectTypeOf(tutor).toBeObject()
  })
})

describe('Pet Carry', () => {
  it('should fail with an unsupported carry value', async () => {
    const newTutor = () => {
      baseTutor.pets.carry = 'p'
      return new Tutor(baseTutor, { runValidators: true }).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: pets.0.carry: p is not supported. Must be one of the following: xs, s, m, l, xl',
    )
  })

  it('should fail with an empty carry value', async () => {
    const newTutor = () => {
      baseTutor.pets.carry = ''
      return new Tutor(baseTutor, { runValidators: true }).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: pets.0.carry: Path `carry` is required.',
    )
  })

  it('should return an object', async () => {
    const newTutor = async () => {
      baseTutor.pets.carry = 'm'
      return await Tutor.create(baseTutor)
    }
    const tutor = await newTutor()
    expectTypeOf(tutor).toBeObject()
  })
})

describe('Pet Weight', () => {
  it('should fail with an empty weight', async () => {
    const newTutor = () => {
      baseTutor.pets.weight = null!
      return new Tutor(baseTutor, { runValidators: true }).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: pets.0.weight: Path `weight` is required.',
    )
  })

  it('should return an object', async () => {
    const newTutor = async () => {
      baseTutor.pets.weight = 5
      return await Tutor.create(baseTutor)
    }
    const tutor = await newTutor()
    expectTypeOf(tutor).toBeObject()
  })
})

describe('Pet Date of Birth', () => {
  it('should fail with an empty date_of_birth', async () => {
    const newTutor = () => {
      baseTutor.pets.date_of_birth = ''
      return new Tutor(baseTutor, { runValidators: true }).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: pets.0.date_of_birth: Path `date_of_birth` is required.',
    )
  })

  it('should fail with date format DD-MM-YYYY', async () => {
    const newTutor = () => {
      baseTutor.pets.date_of_birth = '22/2/2022'
      return new Tutor(baseTutor, { runValidators: true }).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: pets.0.date_of_birth: Cast to date failed for value "22/2/2022" (type string) at path "date_of_birth"',
    )
  })

  it('should return an object', async () => {
    const newTutor = async () => {
      baseTutor.pets.date_of_birth = '2220/2/2'
      return await Tutor.create(baseTutor)
    }
    const tutor = await newTutor()
    expectTypeOf(tutor).toBeObject()
  })
})
