# parse-exponential [![Build Status](https://travis-ci.org/bendrucker/parse-exponential.svg?branch=master)](https://travis-ci.org/bendrucker/parse-exponential)

> Parse an exponential notation string into parts

## Install

```
$ npm install --save parse-exponential
```

## Usage

```js
var parseExponential = require('parse-exponential')
(10).toExponential() // => '1e+1'
parseExponential('1e+1')
//=> ['1', '+1']
```

## API

#### `parseExponential(exponential)` -> `array[coefficient, exponent]`

Parses an exponential into an a array of length 2 containing the coefficient and exponent.

##### exponential

*Required*  
Type: `string`

An exponential notation string. Should follow the format returned by [`Number.prototype.toExponential`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential).

## License

MIT © [Ben Drucker](http://bendrucker.me)
