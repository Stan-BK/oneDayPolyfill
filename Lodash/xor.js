// _.xor([arrays])
// 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
const _ = require('lodash')
function Myxor(...args) {
  var set = new Set(), res = new Set()
  for (var arr of args) {
    for (var val of arr) {
      if (!set.has(val)) {
        set.add(val)
        res.add(val)
      } else {
        res.delete(val)
      }
    }
  }
  return Array.from(res)
}
console.log(Myxor([2, 1], [2, 3], [3]))
console.log(_.xor([2, 1], [2, 3], [3]))