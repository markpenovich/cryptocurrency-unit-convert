var assert = require('assert')
var Units = require('../index.js');

describe('#convert', function() {
  it('should convert Bitcoin big unit to small unit', function() {
    assert.equal(Units.convertBTC('1', 'btc', 'satoshi'), '100000000')
    assert.equal(Units.convertBTC('20', 'mbtc', 'satoshi'), '2000000')
    assert.equal(Units.convertBTC('20.10', 'mbtc', 'satoshi'), '2010000')
    assert.equal(Units.convertBTC('20.05', 'bit', 'satoshi'), '2005')
    assert.equal(Units.convertBTC('20.005', 'bit', 'satoshi'), '2000')
    assert.equal(Units.convertBTC('20.0005', 'bit', 'satoshi'), '2000')
  })
  it('should convert Ethereum big unit to small unit', function() {
    assert.equal(Units.convertETH('1', 'eth', 'wei'), '1000000000000000000')
    assert.equal(Units.convertETH('20', 'gwei', 'wei'), '20000000000')
    assert.equal(Units.convertETH('20.05', 'gwei', 'wei'), '20050000000')
    assert.equal(Units.convertETH('20.005', 'kwei', 'wei'), '20005')
    assert.equal(Units.convertETH('20.0005', 'kwei', 'wei'), '20000')
  })
  it('should fail on invalid input units', function () {
    assert.throws(function () {
      Units.convertETH('1', 'random', 'wei')
    }, /^Error: Unsupported input unit$/)
  })
})
