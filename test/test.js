const assert = require('assert')
const Units = require('../index.js')

describe('Units', () => {
  describe('convertBTC', () => {
    it('should convert BTC to smaller units', () => {
      assert.equal(Units.convertBTC('1', 'btc', 'mbtc'), '1000')
      assert.equal(Units.convertBTC('1', 'btc', 'ubtc'), '1000000')
      assert.equal(Units.convertBTC('1', 'btc', 'bit'), '1000000')
      assert.equal(Units.convertBTC('1', 'btc', 'satoshi'), '100000000')
  
      // assert.equal(Units.convertBTC('20', 'mbtc', 'satoshi'), '2000000')
      // assert.equal(Units.convertBTC('20.10', 'mbtc', 'satoshi'), '2010000')
      // assert.equal(Units.convertBTC('20.05', 'bit', 'satoshi'), '2005')
    })
    it('should convert mbtc to other units', () => {
      assert.equal(Units.convertBTC('1', 'mbtc', 'btc'), '0.001')
      assert.equal(Units.convertBTC('1', 'mbtc', 'ubtc'), '1000')
      assert.equal(Units.convertBTC('1', 'mbtc', 'satoshi'), '100000')
    })
    it('should convert Satoshi to bigger units', () => {
      assert.equal(Units.convertBTC('1', 'satoshi', 'bit'), '0.01')
      assert.equal(Units.convertBTC('1', 'satoshi', 'ubtc'), '0.01')
      assert.equal(Units.convertBTC('1', 'satoshi', 'mbtc'), '0.00001')
      assert.equal(Units.convertBTC('1', 'satoshi', 'btc'), '0.00000001')
    })
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertBTC('.1', 'btc', 'satoshi'), '10000000')
    })
    it('should work with any capitalization', () => {
      assert.equal(Units.convertBTC('1', 'bTc', 'satOSHi'), '100000000')
    })
  })

  describe('convertETH', () => {
    it('should convert Ethereum big unit to small unit', () => {
      assert.equal(Units.convertETH('1', 'eth', 'wei'), '1000000000000000000')
      assert.equal(Units.convertETH('20', 'gwei', 'wei'), '20000000000')
      assert.equal(Units.convertETH('20.05', 'gwei', 'wei'), '20050000000')
      assert.equal(Units.convertETH('20.005', 'kwei', 'wei'), '20005')
    })
    it('should fail on invalid input units', () => {
      assert.throws(() => {
        Units.convertETH('1', 'random', 'wei')
      }, /^Error: Unsupported input unit$/)
    })
  })

  describe('convertXRP', () => {
    it('should convert Ripple big unit to small unit', () => {
      assert.equal(Units.convertXRP('1', 'xrp', 'drop'), '1000000')
      assert.equal(Units.convertXRP('1.5', 'xrp', 'drop'), '1500000')
      assert.equal(Units.convertXRP('1.05', 'xrp', 'drop'), '1050000')
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
  })  
})
