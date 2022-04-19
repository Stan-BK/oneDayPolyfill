// _.nth(array, [n=0])
// 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
const _ = require('lodash')
function Mynth(arr, n) {
  n < 0 &&  (n += arr.length)
  return arr[n]
}
console.log(Mynth( ['a', 'b', 'c', 'd'], 1))
console.log(Mynth( ['a', 'b', 'c', 'd'], -2))
console.log(_.nth( ['a', 'b', 'c', 'd'], -2))