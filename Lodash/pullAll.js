// _.pullAll(array, values)
// 方法类似_.pull，区别是这个方法接收一个要移除值的数组。
const _ = require('lodash')
function MypullAll(arr, other) {
  var obj = {}
  for (var i of other) {
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
 
_.pullAll(array, [2, 3]);
console.log(array);
var array = [1, 2, 3, 1, 2, 3];
 
MypullAll(array, [2, 3]);
console.log(array);