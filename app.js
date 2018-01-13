var Units = require('./index.js')

const convertedXRP = Units.convertXRP('1', 'drop', 'xrp') // '0.000000000000000001'

// Convert 1.5 xrp to drop
const convertedXRP1 = Units.convertXRP('1.5', 'xrp', 'drop') // '1500000000000000000'

// Convert 1 photon to ltc
const convertedLTC = Units.convertLTC('1', 'photon', 'ltc') // '0.000000000000000001'

// Convert 1.5 ltc to photon
const convertedLTC1 = Units.convertLTC('1.5', 'ltc', 'photon') // '1500000000000000000'

console.log(convertedXRP);
console.log(convertedXRP1);
console.log(convertedLTC);
console.log(convertedLTC1);
