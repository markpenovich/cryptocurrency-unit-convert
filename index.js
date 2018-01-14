'use strict'

var BigNumber = require('bignumber.js')

var Units = {}

var rawBtcUnits = require('./utils/json/btcUnits.json')
var rawEthUnits = require('./utils/json/ethUnits.json')
var rawXrpUnits = require('./utils/json/xrpUnits.json')
var rawLtcUnits = require('./utils/json/ltcUnits.json')
var btcUnits = {}
var ethUnits = {}
var xrpUnits = {}
var ltcUnits = {}

Object.keys(rawBtcUnits).map(function (unit) {
  btcUnits[unit] = new BigNumber(rawBtcUnits[unit], 10)
})
Object.keys(rawEthUnits).map(function (unit) {
  ethUnits[unit] = new BigNumber(rawEthUnits[unit], 10)
})
Object.keys(rawXrpUnits).map(function (unit) {
  xrpUnits[unit] = new BigNumber(rawXrpUnits[unit], 10)
})
Object.keys(rawLtcUnits).map(function (unit) {
  ltcUnits[unit] = new BigNumber(rawLtcUnits[unit], 10)
})

Units.btcUnits = rawBtcUnits
Units.ethUnits = rawEthUnits
Units.xrpUnits = rawXrpUnits
Units.ltcUnits = rawLtcUnits

var regX = RegExp(/^[0-9]+\.?[0-9]*$/)

Units.convertBTC = function(value, from, to) {
  if (!regX.test(value)) {
    throw new Error('Unsupported value')
  }
  from = from.toLowerCase()
  if (!btcUnits[from]) {
    throw new Error('Unsupported input unit')
  }
  to = to.toLowerCase()
  if (!btcUnits[to]) {
    throw new Error('Unsupported input unit')
  }
  return new BigNumber(value, 10).times(btcUnits[from]).div(btcUnits[to]).round(0, BigNumber.ROUND_DOWN).toString(10);
}

Units.convertETH = function(value, from, to) {
  if (!regX.test(value)) {
    throw new Error('Unsupported value')
  }
  from = from.toLowerCase()
  if (!ethUnits[from]) {
    throw new Error('Unsupported input unit')
  }
  to = to.toLowerCase()
  if (!ethUnits[to]) {
    throw new Error('Unsupported input unit')
  }
  return new BigNumber(value, 10).times(ethUnits[from]).div(ethUnits[to]).round(0, BigNumber.ROUND_DOWN).toString(10);
}

Units.convertXRP = function(value, from, to) {
  if (!regX.test(value)) {
    throw new Error('Unsupported value')
  }
  from = from.toLowerCase()
  if (!xrpUnits[from]) {
    throw new Error('Unsupported input unit')
  }
  to = to.toLowerCase()
  if (!xrpUnits[to]) {
    throw new Error('Unsupported input unit')
  }
  return new BigNumber(value).times(xrpUnits[from]).div(xrpUnits[to]).round(0, BigNumber.ROUND_DOWN).toString(10);
}

Units.convertLTC = function(value, from, to) {
  if (!regX.test(value)) {
    throw new Error('Unsupported value')
  }
  from = from.toLowerCase()
  if (!ltcUnits[from]) {
    throw new Error('Unsupported input unit')
  }
  to = to.toLowerCase()
  if (!ltcUnits[to]) {
    throw new Error('Unsupported input unit')
  }
  return new BigNumber(value).times(ltcUnits[from]).div(ltcUnits[to]).round(0, BigNumber.ROUND_DOWN).toString(10);
}

module.exports = Units
