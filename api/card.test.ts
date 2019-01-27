import { validate } from './card'

describe('validate', () => {
  it('requires a url', () => {
    expect(() => validate({})).toThrowError()
  })

  it('only requires a url', () => {
    const card = validate({ url: 'foo' })
    expect(card).toHaveProperty('url', 'foo')
  })

  it('discards invalid properties', () => {
    const card = validate({ url: 'foo', pizza: 'pepperoni' })
    expect(card.hasOwnProperty('pizza')).toEqual(false)
  })

  it('takes optional properties if present', () => {
    const card = validate({ url: 'foo', author: 'Herb Caudill' })
    expect(card).toHaveProperty('author', 'Herb Caudill')
  })

  it(`does not add optional properties if they're not provided`, () => {
    const card = validate({ url: 'foo' })
    expect(card.hasOwnProperty('author')).toEqual(false)
  })

  it('adds a timestamp', () => {
    const card = validate({ url: 'foo' })
    expect(card).toHaveProperty('timestamp')
  })
})
