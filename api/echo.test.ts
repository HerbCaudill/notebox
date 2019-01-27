const { echo } = require('./echo')

describe('/echo', () => {
  const { inject } = require('shot')
  let res: any

  const data = {
    foo: 'pizza',
  }

  beforeEach(async () => {
    const req = { method: 'get', url: '/', payload: data }
    res = await inject(echo, req)
  })
  it('responds', () => {
    expect(res.statusCode).toEqual(200)
  })
  it('returns the original payload', () => {
    expect(JSON.parse(res.payload)).toEqual(data)
  })
})
