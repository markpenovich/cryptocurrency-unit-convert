const assert = require('assert')
const Units = require('../index.js')

describe('Units', () => {
  describe('convertBTC', () => {
    it('should convert BTC to smaller units', () => {
      assert.equal(Units.convertBTC('1', 'btc', 'mbtc'), '1000')
      assert.equal(Units.convertBTC('1', 'btc', 'ubtc'), '1000000')
      assert.equal(Units.convertBTC('1', 'btc', 'bit'), '1000000')
      assert.equal(Units.convertBTC('1', 'btc', 'satoshi'), '100000000')
    })
    it('should convert mbtc to other units', () => {
      assert.equal(Units.convertBTC('1', 'mbtc', 'btc'), '0.001')
      assert.equal(Units.convertBTC('1', 'mbtc', 'ubtc'), '1000')
      assert.equal(Units.convertBTC('1', 'mbtc', 'satoshi'), '100000')
    })
    it('should convert ubtc to other units', function() {
      assert.equal(Units.convertBTC('1', 'ubtc', 'btc'), '0.000001')
      assert.equal(Units.convertBTC('1', 'ubtc', 'mbtc'), '0.001')
      assert.equal(Units.convertBTC('1', 'ubtc', 'satoshi'), '100')
    })
    it('should convert Satoshi to bigger units', () => {
      assert.equal(Units.convertBTC('1', 'satoshi', 'bit'), '0.01')
      assert.equal(Units.convertBTC('1', 'satoshi', 'ubtc'), '0.01')
      assert.equal(Units.convertBTC('1', 'satoshi', 'mbtc'), '0.00001')
      assert.equal(Units.convertBTC('1', 'satoshi', 'btc'), '0.00000001')
    })
    it('should fail on invalid input satoshi', () => {
      assert.throws(() => {
        Units.convertBTC('1', 'random', 'satoshi')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on invalid input btc', () => {
      assert.throws(() => {
        Units.convertBTC('1', 'random', 'btc')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on invalid output btc', () => {
      assert.throws(() => {
        Units.convertBTC('1', 'satoshi', 'random')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertBTC('1,00', 'btc', 'random')
      }, /^Error: Unsupported value$/)

      assert.throws(function () {
        Units.convertBTC('test', 'btc', 'random')
      }, /^Error: Unsupported value$/)
    })
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertBTC('.1', 'btc', 'satoshi'), '10000000')
    })
    it('should work with any capitalization', () => {
      assert.equal(Units.convertBTC('1', 'bTc', 'satOSHi'), '100000000')
    })
  })

  describe('convertETH', () => {
    it('should convert eth big unit to small unit', () => {
      assert.equal(Units.convertETH('1', 'eth', 'wei'), '1000000000000000000')
      assert.equal(Units.convertETH('20', 'gwei', 'wei'), '20000000000')
      assert.equal(Units.convertETH('20.05', 'gwei', 'wei'), '20050000000')
      assert.equal(Units.convertETH('20.005', 'kwei', 'wei'), '20005')
    })
    it('should convert wei to bigger unit', function() {
      assert.equal(Units.convertETH('1', 'wei', 'eth'), '0.000000000000000001')
      assert.equal(Units.convertETH('1', 'wei', 'finney'), '0.000000000000001')
      assert.equal(Units.convertETH('1', 'wei', 'gwei'), '0.000000001')
      assert.equal(Units.convertETH('1', 'wei', 'mwei'), '0.000001')
      assert.equal(Units.convertETH('1', 'wei', 'kwei'), '0.001')
    })
    it('should convert kwei to bigger unit', function() {
      assert.equal(Units.convertETH('1', 'kwei', 'eth'), '0.000000000000001')
      assert.equal(Units.convertETH('1', 'kwei', 'finney'), '0.000000000001')
      assert.equal(Units.convertETH('1', 'kwei', 'gwei'), '0.000001')
      assert.equal(Units.convertETH('1', 'kwei', 'mwei'), '0.001')
      assert.equal(Units.convertETH('1', 'kwei', 'wei'), '1000')
    })
    it('should fail on invalid input wei', () => {
      assert.throws(() => {
        Units.convertETH('1', 'random', 'wei')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on invalid output wei', () => {
      assert.throws(() => {
        Units.convertETH('1', 'wei', 'random')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on invalid input eth', () => {
      assert.throws(() => {
        Units.convertETH('1', 'random', 'eth')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertETH('1,00', 'eth', 'random')
      }, /^Error: Unsupported value$/)

      assert.throws(function () {
        Units.convertETH('test', 'eth', 'random')
      }, /^Error: Unsupported value$/)
    })
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertETH('.1', 'eth', 'wei'), '100000000000000000')
    })
    it('should work with any capitalization', () => {
      assert.equal(Units.convertETH('1', 'eTh', 'WEi'), '1000000000000000000')
    })
  })

  describe('convertXRP', () => {
    it('should convert Ripple big unit to small unit', () => {
      assert.equal(Units.convertXRP('1', 'xrp', 'drop'), '1000000')
      assert.equal(Units.convertXRP('1.5', 'xrp', 'drop'), '1500000')
      assert.equal(Units.convertXRP('1.05', 'xrp', 'drop'), '1050000')
    })
    it('should convert drop to bigger units', function() {
      assert.equal(Units.convertXRP('1', 'drop', 'xrp'), '0.000001')
    })
    it('should fail on invalid input drop', () => {
      assert.throws(() => {
        Units.convertXRP('1', 'random', 'drop')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on invalid output xrp', () => {
      assert.throws(() => {
        Units.convertXRP('1', 'xrp', 'random')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertXRP('1,00', 'xrp', 'random')
      }, /^Error: Unsupported value$/)

      assert.throws(function () {
        Units.convertXRP('test', 'xrp', 'random')
      }, /^Error: Unsupported value$/)
    })
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertXRP('.1', 'xrp', 'drop'), '100000')
    })
    it('should work with any capitalization', () => {
      assert.equal(Units.convertXRP('1', 'XrP', 'drOp'), '1000000')
    })
  })

  describe('convertLTC', () => {
    it('should convert Litecoin big unit to small unit', () => {
      assert.equal(Units.convertLTC('1', 'ltc', 'litoshi'), '100000000')
      assert.equal(Units.convertLTC('1', 'lite', 'litoshi'), '100000')
      assert.equal(Units.convertLTC('1', 'photon', 'litoshi'), '100')
      assert.equal(Units.convertLTC('1.5', 'photon', 'litoshi'), '150')
      assert.equal(Units.convertLTC('1.05', 'photon', 'litoshi'), '105')
    })
    it('should convert litoshi to bigger unit', function() {
      assert.equal(Units.convertLTC('1', 'litoshi', 'ltc'), '0.00000001')
    })
    it('should fail on invalid input litoshi', () => {
      assert.throws(() => {
        Units.convertLTC('1', 'random', 'litoshi')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on invalid output ltc', () => {
      assert.throws(() => {
        Units.convertLTC('1', 'ltc', 'random')
      }, /^Error: Unsupported input unit$/)
    })
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertLTC('1,00', 'ltc', 'random')
      }, /^Error: Unsupported value$/)

      assert.throws(function () {
        Units.convertLTC('test', 'ltc', 'random')
      }, /^Error: Unsupported value$/)
    })
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertLTC('.1', 'ltc', 'litoshi'), '10000000')
    })
    it('should work with any capitalization', () => {
      assert.equal(Units.convertLTC('1', 'lTc', 'LitoSHi'), '100000000')
    })
  })
})
