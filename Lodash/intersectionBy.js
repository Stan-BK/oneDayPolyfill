// _.intersectionBy([arrays], [iteratee=_.identity])
// 方法类似_.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。
// iteratee 会传入一个参数：(value)。
const _ = require('lodash')
function MyintersectionBy(arr, other, fnc) {
  if (typeof fnc !== 'function') {
    fnc = ((fnc) => 
      item => item[fnc]
    )(fnc)
  }
  var res = []
  var newArr = Array.from(arr).map(item => fnc(item))
  var newOther = Array.from(other).map(item => fnc(item))
  newArr.forEach((item, index) => {
    newOther.includes(item) && res.push(arr[index])
  })
  return res
}
console.log(_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor))
console.log(MyintersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor))

