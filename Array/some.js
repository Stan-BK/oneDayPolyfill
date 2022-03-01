// Array.prototype.some ES5
// 对数组的每一项进行判断，遇到符合要求则返回true，否则返回false
Array.prototype.Mysome = function(fnc, thisArg) {
  if (typeof fnc !== 'function') {
    throw new Error(fnc + ' is not a function')
  }
  if (Object.prototype.toString.call(this) !== '[object Array]') {
    return false
  }
  var obj = Object(this)
  for (var i = 0; i < this.length; i++) {
    if (fnc.call(thisArg, obj[i], i, obj))
      return true
  }
  return false
}