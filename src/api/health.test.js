/* globals describe it */
const assert = require('assert')
const health = require('./health')

describe('Health endpoint', () => {
  it('Should have an index', () => {
    assert.ok(health.hasOwnProperty('index'))
  })
  it('Index should be a request handler function', () => {
    assert.ok(typeof health.index === 'function', 'Index handler is not a function')
    assert.equal(health.index.length, 2, 'Index handler does not take 2 arguments')
  })
})
