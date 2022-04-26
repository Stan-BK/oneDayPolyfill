// 判断两值是否相等（可判断引用值）
const typeOf = require('./typeof')
function isEqual(a, b) {
  var typeA = typeOf(a)
  var typeB = typeOf(b)
  if (typeA !== typeB) {
    return false
  }
  if (typeA === 'object' || typeA === 'array') {
    var keysA = Object.keys(a)
    var keysB = Object.keys(b)
    if (!isKeyEqual(keysA, keysB)) {
      return false
    }
    for (var key of keysA) {
      if (!isEqual(a[key], b[key])) {
        return false
      }
    }
    return true
  } else {
    return a === b
  }
}

function isKeyEqual(a, b) {
  var set = new Set()
  for (var i of a) {
    set.add(i)
  }
  for (var i of b) {
    if (!set.has(i)) {
      return false
    }
  }
  return true
}

module.exports = isEqual