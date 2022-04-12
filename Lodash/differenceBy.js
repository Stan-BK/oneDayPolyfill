// _.differenceBy(array, [values], [iteratee=_.identity])
// 方法类似_.difference ，除了它接受一个 iteratee （注：迭代器），调用array 和 values 中的每个元素以产生比较的标准。 
// 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。
//（注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。
const _ = require('lodash')
function MydifferenceBy(arr, other, fnc) {
  var res = []
  if (!fnc) {
    fnc = (item) => item
  }
  if (typeof fnc !== 'function') {
    fnc = ((fnc) => 
      item => item[fnc]
    )(fnc)
  }
  var newArr = Array.from(arr).map(item => fnc(item))
  var newOther = Array.from(other).map(item => fnc(item))
  newArr.forEach((item, index) => {
    !newOther.includes(item) && res.push(arr[index])
  })
  return res
}
console.log(_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor))
console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }]))

console.log(MydifferenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor))
console.log(MydifferenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }]))