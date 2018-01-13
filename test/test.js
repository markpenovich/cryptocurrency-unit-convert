var assert = require('assert')
var Units = require('../index.js');

describe('#convert', function() {
  it('should convert big unit to small unit', function() {
    assert.equal(Units.convert('1', 'eth', 'wei'), '1000000000000000000')
    assert.equal(Units.convert('20', 'gwei', 'wei'), '20000000000')
    assert.equal(Units.convert('20.05', 'gwei', 'wei'), '20050000000')
    assert.equal(Units.convert('20.005', 'kwei', 'wei'), '20005')
    assert.equal(Units.convert('20.0005', 'kwei', 'wei'), '20000')
    assert.equal(Units.convert('1', 'tether', 'eth'), '1000000000000')
    assert.equal(Units.convert('1', 'tether', 'wei'), '1000000000000000000000000000000')
  })
  it('should fail on invalid input units', function () {
    assert.throws(function () {
      Units.convert('1', 'random', 'wei')
    }, /^Error: Unsupported input unit$/)
  })
})
