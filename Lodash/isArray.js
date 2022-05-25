// isArray(value)
// 检查value是否是Array类对象
function MyisArray(val) {
  var toStr = Object.prototype.toString
  return toStr.call(val) === '[object Array]'
}