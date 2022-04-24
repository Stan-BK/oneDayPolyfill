// _.tail(array)
// 获取除了array数组第一个元素以外的全部元素。
const _ = require('lodash')
function Mytail(arr) {
  return arr.slice(1)
}
var arr = [1,2,3]
console.log(_.tail(arr))
console.log(arr)
console.log(Mytail(arr))
console.log(arr)