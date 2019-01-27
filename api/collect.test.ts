const { collect } = require('./collect')
const { inject } = require('shot')
const listen = require('test-listen')

const data = {
  foo: 'pizza',
}

describe('/collect', () => {
  it('responds', async () => {
    const req = {
      method: 'get',
      url: '/',
      payload: data,
    }
    const res = await inject(collect, req)
    expect(res.statusCode).toEqual(200)
    expect(JSON.parse(res.payload)).toEqual(data)
  })
})
