import { IncomingMessage, ServerResponse } from 'http'
import micro, { json, send } from 'micro'

export const capture = async (req: IncomingMessage, res: ServerResponse) => {
  const payload = await json(req)
  send(res, 200, 'ok')
}
