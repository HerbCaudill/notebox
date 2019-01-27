import * as R from 'ramda'

export interface Card {
  url: string
  quote_url?: string
  author?: string
  quote?: string
  comment?: string
  timestamp: Date
}

export const validate = (d: any): Card => {
  // Check for required field
  if (!d.hasOwnProperty('url'))
    throw new Error('Card must have a `url` property, containing a reference to the source publication.')

  // Pull any optional fields, if present (missing fields are ignored)
  const optional = R.pick(['url', 'quote_url', 'author', 'quote', 'comment'], d)

  return {
    url: d.url,
    ...optional,
    timestamp: new Date(),
  }
}
