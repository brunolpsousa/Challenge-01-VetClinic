import { beforeAll, describe, expect, expectTypeOf, it } from 'vitest'
import { v4 } from 'uuid'
import connectDB from '../db/db'
import Tutor from './Tutor'

const { DB_HOST, DB_PORT } = process.env
const uuid = () => {
  return v4().split('-')[4]
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

describe('Tutor Name', () => {
  it('should fail with an empty name', () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, name: '' },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: name: must provide name',
    )
  })

  it('should fail when name has more than 30 characters', () => {
    const newTutor = () => {
      return new Tutor(
        {
          _id: `${uuid()}`,
          name: '1234567891113151719212325272930',
        },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: name: maximum 30 characters',
    )
  })

  it('should fail without an id', () => {
    const newTutor = () => {
      return new Tutor({ name: 'tutor' }, { runValidators: true }).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })

  it('should return an object', () => {
    const newTutor = async () => {
      return await Tutor.create(baseTutor)
    }
    expectTypeOf(newTutor()).toBeObject()
  })
})

describe('Tutor Phone', () => {
  it('should fail with an empty phone', () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, phone: '' },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: phone: Path `phone` is required.',
    )
  })

  it('should fail without an id', () => {
    const newTutor = () => {
      return new Tutor({ phone: '99999999' }, { runValidators: true }).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })
})

describe('Tutor Email', () => {
  it('should fail with an empty email', () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, email: '' },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: email: Path `email` is required.',
    )
  })

  it('should fail without an id', () => {
    const newTutor = () => {
      return new Tutor(
        { email: 'mail@mail.com' },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })
})

describe('Tutor Date of Birth', () => {
  it('should fail with an empty date_of_birth', () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, date_of_birth: '' },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: date_of_birth: Path `date_of_birth` is required.',
    )
  })

  it('should fail with date format DD-MM-YYYY', () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, date_of_birth: '22/2/2022' },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: date_of_birth: Cast to date failed for value "22/2/2022" (type string) at path "date_of_birth"',
    )
  })

  it('should fail without an id', () => {
    const newTutor = () => {
      return new Tutor(
        { date_of_birth: '2220/2/2' },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })
})

describe('Tutor Zip Code', () => {
  it('should fail with an empty zip code', () => {
    const newTutor = () => {
      return new Tutor(
        { _id: `${uuid()}`, zip_code: '' },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'Tutor validation failed: zip_code: Path `zip_code` is required.',
    )
  })

  it('should fail without an id', () => {
    const newTutor = () => {
      return new Tutor(
        { zip_code: '123456789' },
        { runValidators: true },
      ).save()
    }
    expect(newTutor()).rejects.toThrowError(
      'document must have an _id before saving',
    )
  })
})
