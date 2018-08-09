# cryptocurrency-unit-convert
[![Build Status](https://travis-ci.org/markpenovich/cryptocurrency-unit-convert.svg?branch=master)](https://travis-ci.org/markpenovich/cryptocurrency-unit-convert)
[![Coverage Status](https://coveralls.io/repos/github/markpenovich/cryptocurrency-unit-convert/badge.svg)](https://coveralls.io/github/markpenovich/cryptocurrency-unit-convert?service=github)

Cryptocurrency unit conversion utility.

Currently supports Bitcoin, Ethereum, Ripple, and Litecoin.

## Getting Started

Install with [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
```javascript
> npm install cryptocurrency-unit-convert --save
```
Require package into project
```javascript
require('cryptocurrency-unit-convert')
```

There are 4 methods:
- `convertBTC(value, fromUnit, toUnit)`
- `convertETH(value, fromUnit, toUnit)`
- `convertXRP(value, fromUnit, toUnit)`
- `convertLTC(value, fromUnit, toUnit)`

## Examples
```javascript
const Units = require('cryptocurrency-unit-convert')

// Convert 1 satoshi to btc
const convertedBTC = Units.convertBTC('1', 'satoshi', 'btc') // '0.00000001'

// Convert 1.5 btc to satoshi
const convertedBTC = Units.convertBTC('1.5', 'btc', 'satoshi') // '150000000'

// Convert 1 wei to eth
const convertedETH = Units.convertETH('1', 'wei', 'eth') // '0.000000000000000001'

// Convert 1.5 eth to wei
const convertedETH = Units.convertETH('1.5', 'eth', 'wei') // '1500000000000000000'

// Convert 1 drop to xrp
const convertedXRP = Units.convertXRP('1', 'drop', 'xrp') // '0.000001'

// Convert 1.5 xrp to drop
const convertedXRP = Units.convertXRP('1.5', 'xrp', 'drop') // '1500000'

// Convert 1 photon to ltc
const convertedLTC = Units.convertLTC('1', 'photon', 'ltc') // '0.00000001'

// Convert 1.5 ltc to photon
const convertedLTC = Units.convertLTC('1.5', 'ltc', 'photon') // '150000000'
```

## Units
#### Bitcoin

satoshi, bit, ubtc, mbtc, btc

#### Ethereum

wei, kwei, mwei, gwei, finney, eth

#### Ripple

drop, xrp

#### Litecoin

litoshi, photon, lite, ltc

### Want more currencies?

Email mark@telx.tech with the currency name, units, and unit names or submit a pull request. Currency list can be found in Units.json

#### License

MIT (c) 2018 [Mark Penovich](markpenovich.com)
