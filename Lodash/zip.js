// _.zip([arrays])
// 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
const _ = require('lodash')
function Myzip(...arrs) {
  var len = arrs.reduce((prev, cur) => Math.max(prev, cur.length), 0)
  var res = Array.from({ length: len }).map(item => [])
  for (var i = 0; i < arrs.length; i++) {
    var arr = arrs[i]
    for (var j = 0; j < len; j++) {
      res[j].push(arr[j])
    }
  }
  return res
}
console.log(_.zip(['fred', 'barney', 'bannana'], [30, undefined, 40], [true, false, true]))
console.log(Myzip(['fred', 'barney', 'bannana'], [30, undefined, 40], [true, false, true]))