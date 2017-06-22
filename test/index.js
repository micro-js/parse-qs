/**
 * Imports
 */

var parseQs = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(parseQs('a=1&b=2'), {a: '1', b: '2'})
  t.deepEqual(parseQs(''), {})
  t.deepEqual(parseQs(), {})
  t.end()
})
