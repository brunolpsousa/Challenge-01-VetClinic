import { Request, Response, NextFunction } from 'express'
import { createCustomError } from '../middleware/errorHandler'
import Tutor from '../models/Tutor'
import wrapper from '../middleware/wrapper'

export const createTutor = wrapper(async (req: Request, res: Response) => {
  const tutor = await Tutor.create(req.body)
  res.status(201).json(tutor)
})

export const getAllTutors = wrapper(async (_: Request, res: Response) => {
  const tutors = await Tutor.find({})
  res.status(200).json(tutors)
})

export const deleteTutor = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: tutorId } = req.params
    const tutor = await Tutor.findOneAndDelete({ _id: tutorId })
    if (!tutor) {
      return next(createCustomError(404, `No tutor with id : ${tutorId}`))
    }
    res.status(200).send()
  },
)

export const replaceTutor = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: tutorId } = req.params
    const tutor = await Tutor.findOneAndReplace({ _id: tutorId }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!tutor) {
      return next(createCustomError(404, `No tutor with id : ${tutorId}`))
    }
    res.status(200).json(tutor)
  },
)

export const modifyTutor = wrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: tutorId } = req.params
    const tutor = await Tutor.findOneAndUpdate({ _id: tutorId }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!tutor) {
      return next(createCustomError(404, `No tutor with id : ${tutorId}`))
    }
    res.status(200).json(tutor)
  },
)
