import { Request, Response, NextFunction } from 'express'
import { createCustomError } from '../middleware/errorHandler'
import Tutor from '../models/Tutor'
import wrapper from '../middleware/wrapper'

export const getPet = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { petId, tutorId } = req.params

    const findPet = await Tutor.findOne(
      {
        _id: tutorId,
        pets: { $elemMatch: { _id: petId } },
      },
      { 'pets.$': 1 },
    )

    if (!findPet) {
      return next(
        createCustomError(
          404,
          `No pet with id: ${petId} for tutor with id: ${tutorId}`,
        ),
      )
    }

    const pet = findPet.pets[0]

    res.status(200).json({ pet })
  },
)

export const deletePet = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { petId, tutorId } = req.params

    const pet = await Tutor.findOneAndUpdate(
      { _id: tutorId, pets: { $elemMatch: { _id: petId } } },
      { $pull: { pets: { _id: petId } } },
    )

    if (!pet) {
      return next(
        createCustomError(
          404,
          `No pet with id: ${petId} for tutor with id: ${tutorId}`,
        ),
      )
    }

    res.status(200).send()
  },
)
