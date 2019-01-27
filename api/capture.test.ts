const { capture } = require('./capture')

describe('/capture', () => {
  const { inject } = require('shot')
  let res: any

  const data = {
    foo: 'pizza',
  }

  beforeEach(async () => {
    const req = { method: 'post', url: '/', payload: data }
    res = await inject(capture, req)
  })

  it('responds', () => {
    expect(res.statusCode).toEqual(200)
  })
})
