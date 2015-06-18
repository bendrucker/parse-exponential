'use strict'

var EXPONENTIAL = /^(-?\d?\.?\d+)e([\+\-]\d)+/

module.exports = function parseExponential (exponential) {
  var matches = exponential.match(EXPONENTIAL)
  if (!matches) throw new Error('Invalid exponential')
  return matches.slice(1)
}
