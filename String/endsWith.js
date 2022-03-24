// String.prototype.endsWith ES6
// 返回一个字符串是否以指定字符串结尾的结果
String.prototype.MyendsWith = function(str, length) {
  var str = String(str)
  var thisStr = String(this)
  var len = str.length
  var lastIndex = length === undefined || length > thisStr.length 
                  ? thisStr.length 
                  : length
  return thisStr.substring(lastIndex, lastIndex - len) === str
}