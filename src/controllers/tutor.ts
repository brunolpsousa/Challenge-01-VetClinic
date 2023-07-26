import { Request, Response } from 'express'
import Tutor from '../models/Tutor'
import wrapper from '../middleware/wrapper'

export const createTutor = wrapper(async (req: Request, res: Response) => {
  const tutor = await Tutor.create(req.body)
  res.status(201).json({ tutor })
})

export const getAllTutors = wrapper(async (_: Request, res: Response) => {
  const tutors = await Tutor.find({})
  res.status(200).json({ tutors })
})
