import { Request, Response, NextFunction } from 'express'
import { createCustomError } from '../middleware/errorHandler'
import Tutor from '../models/Tutor'
import wrapper from '../middleware/wrapper'

export const createPet = wrapper(async (req: Request, res: Response) => {
  const { tutorId } = req.params
  const newPet = await Tutor.findOneAndUpdate(
    { _id: tutorId },
    { $push: { pets: req.body } },
    { new: true, runValidators: true },
  )
  const pet = newPet.pets[newPet.pets.length - 1]
  return res.status(201).json(pet)
})

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

    res.status(200).json(pet)
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

export const replacePet = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { petId, tutorId } = req.params
    req.body._id = petId
    const updatePet = await Tutor.findOneAndUpdate(
      { _id: tutorId, pets: { $elemMatch: { _id: petId } } },
      { $set: { 'pets.$': req.body } },
      { new: true, runValidators: true },
    )

    if (!updatePet) {
      return next(
        createCustomError(
          404,
          `No pet with id: ${petId} for tutor with id: ${tutorId}`,
        ),
      )
    }

    const returnPet = await Tutor.findOne(
      {
        _id: tutorId,
        pets: { $elemMatch: { _id: req.body._id } },
      },
      { 'pets.$': 1 },
    )
    const pet = returnPet.pets[0]
    res.status(200).json(pet)
  },
)

export const modifyPet = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { petId, tutorId } = req.params
    const updatePet = await Tutor.findOneAndUpdate(
      { _id: tutorId, pets: { $elemMatch: { _id: petId } } },
      {
        $set: {
          'pets.$.name': req.body.name,
          'pets.$.species': req.body.species,
          'pets.$.carry': req.body.carry,
          'pets.$.weight': req.body.weight,
          'pets.$.date_of_birth': req.body.date_of_birth,
        },
      },
      { new: true, runValidators: true },
    )

    if (!updatePet) {
      return next(
        createCustomError(
          404,
          `No pet with id: ${petId} for tutor with id: ${tutorId}`,
        ),
      )
    }

    const returnPet = await Tutor.findOne(
      {
        _id: tutorId,
        pets: { $elemMatch: { _id: petId } },
      },
      { 'pets.$': 1 },
    )
    const pet = returnPet.pets[0]
    res.status(200).json(pet)
  },
)
