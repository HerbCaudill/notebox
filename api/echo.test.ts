const { echo } = require('./echo')
const { inject } = require('shot')
const listen = require('test-listen')

const data = {
  foo: 'pizza',
}

describe('/echo', () => {
  it('responds', async () => {
    const req = {
      method: 'get',
      url: '/',
      payload: data,
    }
    const res = await inject(echo, req)
    expect(res.statusCode).toEqual(200)
    expect(JSON.parse(res.payload)).toEqual(data)
  })
})
