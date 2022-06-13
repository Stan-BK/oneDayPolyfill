// _.flow([funcs])
// 创建一个函数。 返回的结果是调用提供函数的结果，this 会绑定到创建函数。 每一个连续调用，传入的参数都是前一个函数返回的结果。
function Myflow(fncs) {
  return function(...args) {
    var res = fncs[0] && fncs[0](...args)
    for (var i = 1; i < fncs.length; i++) {
      res = fncs[i](res)
    }
    return res
  }
}
const _ = require('lodash')
function square(n) {
  return n * n;
}
 
var addSquare = Myflow([_.add, square]);
console.log(addSquare(1, 2))