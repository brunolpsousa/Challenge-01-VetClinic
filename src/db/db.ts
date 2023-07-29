import { connect, ConnectOptions } from 'mongoose'

export default async (url: string) => {
  return await connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
}
