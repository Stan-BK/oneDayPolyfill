// String.prototype.includes ES6
// 判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
String.prototype.Myincludes = function(str, fromIndex) {
  str = String(str)
  fromIndex = Math.abs(fromIndex >> 0)
  var thisStr = String(str)
  return thisStr.indexOf(str, fromIndex) !== -1 ? true : false
}