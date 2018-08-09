"use strict";

const BigNumber = require("bignumber.js");
const rawUnits = require("./Units.json");

const Units = {};

const btcUnits = {};
const ethUnits = {};
const xrpUnits = {};
const ltcUnits = {};

Object.keys(rawUnits).map(function (rawUnit) {
  Object.keys(rawUnits[rawUnit]).map(function(i) {

    if (rawUnit === "btc") {
      btcUnits[i] = new BigNumber(rawUnits[rawUnit][i], 10);
      Units.btcUnits = rawUnits[rawUnit];
    }

    if (rawUnit === "eth") {
      ethUnits[i] = new BigNumber(rawUnits[rawUnit][i], 10);
      Units.ethUnits = rawUnits[rawUnit];
    }

    if (rawUnit === "xrp") {
      xrpUnits[i] = new BigNumber(rawUnits[rawUnit][i], 10);
      Units.xrpUnits = rawUnits[rawUnit];
    }

    if (rawUnit === "ltc") {
      ltcUnits[i] = new BigNumber(rawUnits[rawUnit][i], 10);
      Units.ltcUnits = rawUnits[rawUnit];
    }

  });
});

const regX = new RegExp(/^-?\d*\.?\d*$/);

Units.convertBTC = (value, from, to) => {
  from = from.toLowerCase();
  to = to.toLowerCase();
  if (!regX.test(value)) {
    throw new Error("Unsupported value");
  }
  if (!btcUnits[from]) {
    throw new Error("Unsupported input unit");
  }
  if (!btcUnits[to]) {
    throw new Error("Unsupported input unit");
  }
  return new BigNumber(value, 10).times(btcUnits[from]).div(btcUnits[to]).toString(10);
};

Units.convertETH = (value, from, to) => {
  from = from.toLowerCase();
  to = to.toLowerCase();
  if (!regX.test(value)) {
    throw new Error("Unsupported value");
  }
  if (!ethUnits[from]) {
    throw new Error("Unsupported input unit");
  }
  if (!ethUnits[to]) {
    throw new Error("Unsupported input unit");
  }
  return new BigNumber(value, 10).times(ethUnits[from]).div(ethUnits[to]).toString(10);
};

Units.convertXRP = (value, from, to) => {
  from = from.toLowerCase();
  to = to.toLowerCase();
  if (!regX.test(value)) {
    throw new Error("Unsupported value");
  }
  if (!xrpUnits[from]) {
    throw new Error("Unsupported input unit");
  }
  if (!xrpUnits[to]) {
    throw new Error("Unsupported input unit");
  }
  return new BigNumber(value).times(xrpUnits[from]).div(xrpUnits[to]).toString(10);
};

Units.convertLTC = (value, from, to) => {
  from = from.toLowerCase();
  to = to.toLowerCase();
  if (!regX.test(value)) {
    throw new Error("Unsupported value");
  }
  if (!ltcUnits[from]) {
    throw new Error("Unsupported input unit");
  }
  if (!ltcUnits[to]) {
    throw new Error("Unsupported input unit");
  }
  return new BigNumber(value, 10).times(ltcUnits[from]).div(ltcUnits[to]).toString(10);
};

module.exports = Units;
