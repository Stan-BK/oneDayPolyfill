// 判断值类型
function typeOf(val) {
  var type = typeof(val)
  if (type !== 'object') {
    return type
  }
  var typeList = {
    '[object Array]' : 'array',
    '[object Object]' : 'object',
    '[object Null]' : 'null'
  }
  var toStr = Object.prototype.toString
  return typeList[toStr.call(val)]
}

module.exports = typeOf