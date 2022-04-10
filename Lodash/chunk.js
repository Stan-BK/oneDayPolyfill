// _.chunk(array, [size=1])
// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
const _ = require('lodash')
function Mychunk(arr, size = 1) {
  var res = [], chunk = []
  chunk.push(arr[0])
  for (var i = 1; i < arr.length; i++) {
    if (i % size === 0) {
      res.push(chunk)
      chunk = []
    }
    chunk.push(arr[i])
  }
  chunk.length && res.push(chunk)
  return res
}
console.log(_.chunk([1, 2, 3, 4, 5], 3))
console.log(Mychunk([1, 2, 3, 4, 5], 3))