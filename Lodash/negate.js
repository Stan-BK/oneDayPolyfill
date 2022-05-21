// _.negate(predicate)
// 创建一个针对断言函数 func 结果取反的函数。 func 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数。
const _ = require('lodash')
function Mynegate(fnc) {
    return function predicate(...args) {
        return !fnc.apply(predicate, args)
    }
}
function isEven(n) {
    return n % 2 == 0
}

console.log(_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven)))
console.log(_.filter([1, 2, 3, 4, 5, 6], Mynegate(isEven)))