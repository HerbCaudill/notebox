const { echo } = require('./echo')
const { inject } = require('shot')

const data = {
  foo: 'pizza',
}

describe('/echo', () => {
  let res: any

  beforeEach(async () => {
    const req = {
      method: 'get',
      url: '/',
      payload: data,
    }
    res = await inject(echo, req)
  })
  it('responds', () => {
    expect(res.statusCode).toEqual(200)
  })
  it('returns the original payload', () => {
    expect(JSON.parse(res.payload)).toEqual(data)
  })
})
