import { IncomingMessage, ServerResponse } from 'http'
import micro, { json, send } from 'micro'

export const collect = async (req: IncomingMessage, res: ServerResponse) => {
  const payload = await json(req)
  send(res, 200, payload)
}
