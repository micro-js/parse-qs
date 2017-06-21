/**
 * Expose parseQs
 */

module.exports = parseQs

/**
 * parseQs
 */

function parseQs (str) {
  return str
    .split('&')
    .reduce(function (acc, param) {
      var pair = param.split('=')
      acc[pair[0]] = pair[1]
      return acc
    }, {})
}
