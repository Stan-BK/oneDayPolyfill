// _.overEvery([predicates=[_.identity]])
// 建一个函数，传入提供的参数的函数并调用 predicates 判断是否 全部 都为真值。
function MyoverEvery(arrs) {
  return function(...args) {
    for (var i = 0; i < arrs.length; i++) {
      if (!arrs[i](...args)) {
        return false
      }
    }
    return true
  }
}
var func = MyoverEvery([Boolean, isFinite]);
 
console.log(func('1'))
// => true
 
console.log(func(null))
// => false
 
console.log(func(NaN))