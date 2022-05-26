// _.isEmpty(value)
// 检查 value 是否为一个空对象，集合，映射或者set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类jquery选择器。
const isArguments = require('./isArguments')
const _ = require('lodash')
function MyisEmpty(val) {
  let toStr = Object.prototype.toString
  if (toStr.call(val) === '[object Map]' || toStr.call(val) === '[object Set]') {
    return !val.size
  }
  if (isArguments(val)) {
    return !val.length
  } else if (typeof val === 'object'){
    return !Object.keys(val).length
  }
  return true
}