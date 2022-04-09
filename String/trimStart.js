// String.prototype.trimStart / String.prototype.trimLeft ES2019
// 从字符串的开头删除空格。trimLeft() 是此方法的别名。
String.prototype.MytrimStart = function() {
  return String(this).replace(/^\s/, '')
}