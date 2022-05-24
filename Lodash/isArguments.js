// _.isArguments(value)
// 检查 value 是否是一个类 arguments 对象。
const _ = require('lodash')
function MyisArguments(val) {
  return Object.prototype.toString.call(val) === '[object Arguments]'
}
console.log(MyisArguments(function() { return arguments; }()))
console.log(_.isArguments(function() { return arguments; }()))
// => true
 
console.log(MyisArguments([1, 2, 3]))
console.log(_.isArguments([1, 2, 3]))