// _.ary(func, [n=func.length])
// 创建一个调用func的函数。调用func时最多接受 n个参数，忽略多出的参数。
const _ = require('lodash')
function Myary(fnc, n) {
  return function(...args) {
    return fnc(...args.slice(0, n))
  }
}

console.log(_.map(['6', '8', '10'], _.ary(parseInt, 1)))
console.log(_.map(['6', '8', '10'], Myary(parseInt, 1)))
