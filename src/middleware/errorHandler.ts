import { Request, Response, NextFunction } from 'express'

class CustomAPIError extends Error {
  statusCode: number
  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
  }
}

export const createCustomError = (statusCode: number, msg: string) => {
  return new CustomAPIError(statusCode, msg)
}

export default function (
  err: any,
  _: Request,
  res: Response,
  _2: NextFunction,
) {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ error: err.message })
  }
  if (err.message) {
    return res.status(500).json({ error: err.message })
  }
  return res
    .status(500)
    .json({ error: 'Something went wrong, please try again' })
}
