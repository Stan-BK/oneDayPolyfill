// String.prototype.repeat ES6
// 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
String.prototype.Myrepeat = function(count) {
  'use strict'
  if (this == null) {
    throw new TypeError('String.prototype.repeat called on null or undefined')
  }
  var str = String(this)
  count = parseInt(count)
  if (count != count) { // 排除NaN
    count = 0
  }
  if (count < 0) {
    throw new RangeError('repeat count can not be a negative number')
  }
  if (count == Infinity) {
    throw new RangeError('repeat count must be less than infinity')
  }
  if (count == 0 || str.length == 0) {
    return ''
  }
  // 引用自MDN
  // 确保 count 是一个 31 位的整数。这样我们就可以使用如下优化的算法。
  // 当前（2014年8月），绝大多数浏览器都不能支持 1 << 28 长的字符串，所以：
  if (str.length * count >= 1 << 28) {
    throw new RangeError('repeat count must not overflow maximum string size');
  }
  var newStr = ''
  while(count--) {
    newStr += str
  }
  return newStr
}