import { Request, Response, NextFunction } from 'express'

class CustomAPIError extends Error {
  statusCode: number
  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}

export const createCustomError = (statusCode: number, msg: string) => {
  return new CustomAPIError(msg, statusCode)
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
