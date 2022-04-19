// _.pull(array, [values])
// 移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
const _ = require('lodash')
function Mypull(arr, ...args) {
  var obj = {}
  for (var i of args) {
    obj[i] = 1
  }
  for (var i = 0; i < arr.length;) {
    var num = arr[i]
    if (obj[num]) {
      arr.splice(i, 1)
      continue
    }
    i++
  }
}
var array = [1, 2, 3, 1, 2, 3];

_.pull(array, 2, 3);
console.log(array);

var array = [1, 2, 3, 1, 2, 3];

Mypull(array, 2, 3);
console.log(array);