// String.prototype.trim ES5
// 从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）。
String.prototype.Mytrim = function() {
  return String(this).replace(/^[\s]+|[\s]$/g, '')
}