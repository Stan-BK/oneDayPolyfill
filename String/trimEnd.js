// String.prototype.trimEnd / String.prototype.trimRight ES2019
// 从一个字符串的末端移除空白字符。trimRight() 是这个方法的别名。
String.prototype.MytrimEnd = function() {
  return String(this).replace(/\s+$/, '')
}
var arr = [1,2,'ar   ']