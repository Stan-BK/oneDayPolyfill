// _.unary(func)
// 创建一个最多接受一个参数的函数，忽略多余的参数。
const _ = require('lodash')
function Myunary(fnc) {
  return function(arg) {
    return fnc(arg)
  }
}
console.log(_.map(['6', '8', '10'], Myunary(parseInt)))