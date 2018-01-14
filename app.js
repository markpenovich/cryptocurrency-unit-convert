var Units = require('./index.js')

const convertedValue = Units.convertBTC('1', 'btc', 'bit') // '0.000000000000000001'

console.log(convertedValue);
