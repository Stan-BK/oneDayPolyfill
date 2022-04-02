// String.prototype.padStart ES2017
// 用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。
String.prototype.MypadStart = function(len, padStr) {
  if (this == undefined) {
    throw new TypeError('String.prototype.padEnd called on null or undefined')
  }
  var thisStr = String(this)
  var length = thisStr.length
  padStr = padStr === undefined ? ' ' : String(padStr)
  var padLen = len - length
  var str = ''
  var i = 0, j = padLen
  while(j--) {
    str += padStr[i++]
    i = i > padLen && 0
  }
  return str + thisStr
}