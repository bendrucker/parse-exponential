'use strict'

var test = require('tape')
var parseExponential = require('./')

test(function (t) {
  // 1e+0
  t.deepEqual(parse(1), ['1', '+0'])

  // 2e+1
  t.deepEqual(parse(20), ['2', '+1'])

  // -1e+0
  t.deepEqual(parse(-1), ['-1', '+0'])

  // 1e-1
  t.deepEqual(parse(0.1), ['1', '-1'])

  // 1.23e-3
  t.deepEqual(parse(0.00123), ['1.23', '-3'])

  t.end()
})

function parse (number) {
  return parseExponential(number.toExponential())
}
