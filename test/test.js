var assert = require('assert')
var Units = require('../index.js');

describe('#convert', function() {
  it('should convert Bitcoin big unit to small unit', function() {
    assert.equal(Units.convertBTC('1', 'btc', 'satoshi'), '100000000')
    assert.equal(Units.convertBTC('20', 'mbtc', 'satoshi'), '2000000')
    assert.equal(Units.convertBTC('20.10', 'mbtc', 'satoshi'), '2010000')
    assert.equal(Units.convertBTC('20.05', 'bit', 'satoshi'), '2005')
  })
  it('should convert Ethereum big unit to small unit', function() {
    assert.equal(Units.convertETH('1', 'eth', 'wei'), '1000000000000000000')
    assert.equal(Units.convertETH('20', 'gwei', 'wei'), '20000000000')
    assert.equal(Units.convertETH('20.05', 'gwei', 'wei'), '20050000000')
    assert.equal(Units.convertETH('20.005', 'kwei', 'wei'), '20005')
  })
  it('should convert Ripple big unit to small unit', function() {
    assert.equal(Units.convertXRP('1', 'xrp', 'drop'), '1000000')
    assert.equal(Units.convertXRP('1.5', 'xrp', 'drop'), '1500000')
    assert.equal(Units.convertXRP('1.05', 'xrp', 'drop'), '1050000')
  })
  it('should convert Litecoin big unit to small unit', function() {
    assert.equal(Units.convertLTC('1', 'ltc', 'litoshi'), '100000000')
    assert.equal(Units.convertLTC('1', 'lite', 'litoshi'), '100000')
    assert.equal(Units.convertLTC('1', 'photon', 'litoshi'), '100')
    assert.equal(Units.convertLTC('1.5', 'photon', 'litoshi'), '150')
    assert.equal(Units.convertLTC('1.05', 'photon', 'litoshi'), '105')
  })
  it('should fail on invalid input units', function () {
    assert.throws(function () {
      Units.convertETH('1', 'random', 'wei')
    }, /^Error: Unsupported input unit$/)
  })
})
