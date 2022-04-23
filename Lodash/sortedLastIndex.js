// _.sortedLastIndex(array, value)
// 方法类似于_.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index）。
const _ = require('lodash')

function MysortedLastIndex(arr, value) {
  var len = arr.length
  var low = 0
  var high = len
  while (low < high) {
    var mid = (low + high) >>> 1
    if (arr[mid] === value) {
      for (var i = mid; i < high; i++) {
        if (arr[i] !== value) {
          return i
        }
      }
      return i
    } else if (arr[mid] < value) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return high
}
var arr = [30, 50, 60, 80, 90]
console.log(MysortedLastIndex([4, 5, 5, 5, 6], 5))
console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5))