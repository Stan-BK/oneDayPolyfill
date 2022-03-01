// Array.prototype.every ES5
// 对数组的每一项进行判断，遇到不符合要求则返回false，否则返回true
Array.prototype.Myevery = function(fnc, thisArg) {
  if (typeof fnc !== 'function') {
    throw new Error(fnc + ' is not a function')
  }
  if (Object.prototype.toString.call(this) !== '[object Array]') {
    return true
  }
  var obj = Object(this)
  for (var i = 0; i < this.length; i++) {
    if (!fnc.call(thisArg, obj[i]), i, obj)
      return false
  }
  return true
}