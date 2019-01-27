const { createServer } = require('http')
const { inject } = require('shot')
const { collect } = require('./collect')

describe('/collect', () => {
  let res

  beforeEach(async () => {
    const server = createServer(collect)
    res = await inject(collect, { method: 'get', url: '/' })
  })

  it('responds', () => {
    expect(res.payload).toEqual('Hello!')
  })
})
