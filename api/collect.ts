import { IncomingMessage, ServerResponse } from 'http'

export const collect = (req: IncomingMessage, res: ServerResponse) => {
  res.end(`Hello!`)
}
