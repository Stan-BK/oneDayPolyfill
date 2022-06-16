// _.overSome([predicates=[_.identity]])
// 创建一个函数，传入提供的参数的函数并调用 predicates 判断是否 存在 有真值。
function MyoverSome(arrs) {
  return function(...args) {
    for (var i = 0; i < arrs.length; i++) {
      if (arrs[i](...args)) {
        return true
      }
    }
    return false
  }
}
var func = MyoverSome([Boolean, isFinite]);
 
console.log(func('1'))
// => true
 
console.log(func(null))
// => true
 
console.log(func(NaN))
// => false