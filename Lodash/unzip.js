// _.unzip(array)
// 这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（：返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）
const _ = require('lodash')
function Myunzip(arr) {
  var len = arr[0].length, res = Array.from({ length: len }).map(item => [])
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < len; j++) {
      res[j][i] = arr[i][j]
    }
  }
  return res
}
var arr = [
  [ 'fred', 30, true ],
  [ 'barney', undefined, false ],
  [ 'bannana', 40, true ]
]
console.log(_.unzip(arr))
console.log(Myunzip(arr))
