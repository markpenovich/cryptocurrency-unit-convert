'use strict'

var BigNumber = require('bignumber.js')

var rawUnits = require('./utils/json/Units.json')

const Units = {}

const btcUnits = {}
const ethUnits = {}
const xrpUnits = {}
const ltcUnits = {}

Object.keys(rawUnits).map(function (rawUnit) {
  if (rawUnit === 'btc') {
    Object.keys(rawUnits[rawUnit]).map(function(i) {
      btcUnits[i] = new BigNumber(rawUnits[rawUnit][i], 10)
    })
    Units.btcUnits = rawUnits[rawUnit]
  }
  if (rawUnit === 'eth') {
    Object.keys(rawUnits[rawUnit]).map(function(i) {
      ethUnits[i] = new BigNumber(rawUnits[rawUnit][i], 10)
    })
    Units.ethUnits = rawUnits[rawUnit]
  }
  if (rawUnit === 'xrp') {
    Object.keys(rawUnits[rawUnit]).map(function(i) {
      xrpUnits[i] = new BigNumber(rawUnits[rawUnit][i], 10)
    })
    Units.xrpUnits = rawUnits[rawUnit]
  }
  if (rawUnit === 'ltc') {
    Object.keys(rawUnits[rawUnit]).map(function(i) {
      ltcUnits[i] = new BigNumber(rawUnits[rawUnit][i], 10)
    })
    Units.ltcUnits = rawUnits[rawUnit]
  }
});

var regX = RegExp(/^-?\d*\.?\d*$/)

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
  return new BigNumber(value, 10).times(btcUnits[from]).div(btcUnits[to]).toString(10);
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
  return new BigNumber(value, 10).times(ethUnits[from]).div(ethUnits[to]).toString(10);
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
  return new BigNumber(value).times(xrpUnits[from]).div(xrpUnits[to]).toString(10);
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
  return new BigNumber(value, 10).times(ltcUnits[from]).div(ltcUnits[to]).toString(10);
}

module.exports = Units
