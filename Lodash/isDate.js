// _.isDate(val)
// 检查value是否是Date对象
function MyisDate(val) {
  var toStr = Object.prototype.toString
  return toStr.call(val) === '[object Date]'
}