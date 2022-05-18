// _.overArgs(func, [transforms=[_.identity]])
// 创建一个函数，调用func时参数为相对应的transforms的返回值。
const _ = require('lodash')
function MyoverArgs(fnc, transforms) {
  return function(...args) {
    var arr = fnc.call(null, ...args)
    var res = []
    for (var i = 0; i < arr.length; i++) {
      if (transforms[i] && typeof transforms[i] === 'function')
        res[i] = transforms[i](arr[i])
      else
        res[i] = arr[i]
    }
    return res
  }
}
function doubled(n) {
  return n * 2;
}
 
function square(n) {
  return n * n;
}
 
var func = _.overArgs(function(x, y, z) {
  return [x, y, z];
}, [square, doubled]);
var func2 = MyoverArgs(function(x, y, z) {
  return [x, y, z];
}, [square, doubled])
console.log(func(9, 3, 8))
console.log(func2(9, 3, 8))
 
console.log(func(10, 5))
console.log(func2(10, 5))