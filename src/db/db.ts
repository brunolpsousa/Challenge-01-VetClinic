import { connect } from 'mongoose'

export default async (url: string) => {
  return await connect(url)
}
