
# parse-qs

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Query string parser

## Installation

    $ npm install @f/parse-qs

## Usage

```js
var parseQs = require('@f/parse-qs')

parseQs('a=1&b=2') // -> {a: '1', b: '2'}
```

## API

### parseQs(str)

- `str` - Query string (e.g. 'a=1&b=2')

**Returns:** Returns object of `name`/`value` pairs.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/parse-qs.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/parse-qs
[git-image]: https://img.shields.io/github/tag/micro-js/parse-qs.svg?style=flat-square
[git-url]: https://github.com/micro-js/parse-qs
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/parse-qs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/parse-qs
