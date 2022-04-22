// _.sortedIndexBy(array, value, [iteratee=_.identity])
// 方法类似_.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。
const _ = require('lodash')
function MysortedIndexBy(arr, other, fnc) {
  if (typeof fnc !== 'function') {
    fnc = ((fnc) =>
      item => item[fnc]
      )(fnc)
  }
  var len = arr.length
  var low = 0
  var high = len
  var otherVal = fnc(other)
  while(low < high) {
    var mid = (low + high) >>> 1
    var val = fnc(arr[mid])
    if (val === otherVal) {
      return mid
    } else if (val < otherVal) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return high
}
var objects = [{ 'x': 4 }, { 'x': 5 }];
 
console.log(_.sortedIndexBy(objects, { 'x': 5 }, function(o) { return o.x; }))
console.log(MysortedIndexBy(objects, { 'x': 5 }, function(o) { return o.x; }))
// => 0
 
// The `_.property` iteratee shorthand.
console.log(_.sortedIndexBy(objects, { 'x': 4 }, 'x'))
console.log(MysortedIndexBy(objects, { 'x': 4 }, 'x'))