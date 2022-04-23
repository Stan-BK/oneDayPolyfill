// _.sortedIndex(array, value)
// 使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
// 思路：根据二分查找，求得最佳位置
const _ = require('lodash')
const MAX_ARRAY_LENGTH = 4294967295
const HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1

function MysortedIndex(arr, value) {
  var len = arr.length
  var low = 0
  var high = len
  while (low < high) {
    var mid = (low + high) >>> 1
    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] < value) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return high
}
var arr = [30, 50, 60, 80, 90]
console.log(MysortedIndex(arr, 70))
console.log(_.sortedIndex(arr, 70))