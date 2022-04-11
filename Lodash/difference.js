// _.difference(array, [values])
// 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
//（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
// 该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
const _ = require('lodash')
function Mydifference(arr, other) {
  var res = [], cache = new Set()
  for (var i of arr) {
    if (cache.has(i)) continue
    if (other.some(item => sameValueZero(item, i))) {
      cache.add(i)
    } else {
      res.push(i)
    }

    function sameValueZero(x, y) {
      return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))
    }
  }
  return res
}
console.log(_.difference([3, 2, 1, NaN], [4, 2, NaN]))
console.log(Mydifference([3, 2, 1, NaN], [4, 2, NaN]))