// String.prototype.padEnd ES2017
// 用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
String.prototype.MypadEnd = function(len, padStr) {
  if (this == undefined) {
    throw new TypeError('String.prototype.padEnd called on null or undefined')
  }
  var thisStr = String(this)
  var length = thisStr.length
  padStr = padStr === undefined ? ' ' : String(padStr)
  var i = length, j = 0
  while(i < len) {
    thisStr += padStr[j]
    i++
    j = j + 1 === padStr.length ? 0 : j + 1
  }
  return thisStr
}