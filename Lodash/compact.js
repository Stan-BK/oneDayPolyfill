// _.compact(array)
// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
const _ = require('lodash')
function Mycompact(arr) {
  if (arr == undefined) {
    return []
  }
  return Array.from(arr).filter(item => Boolean(item))
}
console.log(_.compact([0, 1, false, 2, '', 3]))
console.log(Mycompact([0, 1, false, 2, '', 3]))