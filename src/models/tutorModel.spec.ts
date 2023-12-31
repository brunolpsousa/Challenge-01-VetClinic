import { beforeAll, afterAll, describe, expect, expectTypeOf, it } from 'vitest'
import { disconnect, Types } from 'mongoose'
import connectDB from '@db/db'
import Tutor from './tutorModel'

const { DB_HOST, DB_PORT } = process.env
const uuid = () => {
  return new Types.ObjectId().toString()
}

const baseTutor = {
  _id: `${uuid()}`,
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
  const res = await Tutor.deleteMany({})
  console.log('Deleted tutors count:', res.deletedCount)
  await disconnect()
})

describe('Tutor Name', () => {
  it('should fail with an empty name', async () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, name: '' },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: name: must provide name',
    )
  })

  it('should fail when name has more than 30 characters', async () => {
    const newTutor = () => {
      return new Tutor(
        {
          _id: `${uuid()}`,
          name: '1234567891113151719212325272930',
        },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: name: maximum 30 characters',
    )
  })

  it('should fail without an id', async () => {
    const newTutor = () => {
      return new Tutor({ name: 'tutor' }, { runValidators: true }).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })

  it('should return an object', async () => {
    const newTutor = async () => {
      return await Tutor.create(baseTutor)
    }
    const tutor = await newTutor()
    expectTypeOf(tutor).toBeObject()
  })
})

describe('Tutor Phone', () => {
  it('should fail with an empty phone', async () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, phone: '' },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: phone: Path `phone` is required.',
    )
  })

  it('should fail without an id', async () => {
    const newTutor = () => {
      return new Tutor({ phone: '99999999' }, { runValidators: true }).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })
})

describe('Tutor Email', async () => {
  it('should fail with an empty email', async () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, email: '' },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: email: Path `email` is required.',
    )
  })

  it('should fail without an id', async () => {
    const newTutor = () => {
      return new Tutor(
        { email: 'mail@mail.com' },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })
})

describe('Tutor Date of Birth', () => {
  it('should fail with an empty date_of_birth', async () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, date_of_birth: '' },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: date_of_birth: Path `date_of_birth` is required.',
    )
  })

  it('should fail with date format DD-MM-YYYY', async () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, date_of_birth: '22/2/2022' },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: date_of_birth: Cast to date failed for value "22/2/2022" (type string) at path "date_of_birth"',
    )
  })

  it('should fail without an id', async () => {
    const newTutor = () => {
      return new Tutor(
        { date_of_birth: '2220/2/2' },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })
})

describe('Tutor Zip Code', () => {
  it('should fail with an empty zip code', async () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, zip_code: '' },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: zip_code: Path `zip_code` is required.',
    )
  })

  it('should fail without an id', async () => {
    const newTutor = () => {
      return new Tutor(
        { zip_code: '123456789' },
        { runValidators: true },
      ).save()
    }
    await expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })
})
