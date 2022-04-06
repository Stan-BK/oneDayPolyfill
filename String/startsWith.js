// String.prototype.startsWith ES6
// 判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。
String.prototype.MystartsWith = function(startStr) {
  if (this == undefined) {
    throw new Error('String.prototype.MystartsWith called on null or undefined')
  }
  var str = String(this)
  startStr = String(startStr)
  return str.indexOf(startStr) === 0
}
console.log('123'.MystartsWith('2'))