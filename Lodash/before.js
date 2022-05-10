// _.before(n, func)
// 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
const _ = require('lodash')
function Mybefore(n, fnc) {
  var i = 0
  return function() {
    if (++i <= n) {
      fnc()
    }
  }
}
var arr = Array.from({ length: 10 })
var testBefore = Mybefore(5, function() {
  console.log('output')
})
_.forEach(arr,  function(type) {
  testBefore()
});
