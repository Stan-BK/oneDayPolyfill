// _.intersection([arrays])
//创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
const _ = require('lodash')
function Myintersection(...arrays) {  
  var map = new Map()
  var res = []
  for (var arr of arrays) {
    arr.forEach(item => {
      var num = map.get(item) 
      if (!num) {
        map.set(item, 1)
      } else {
        map.set(item, ++num)
      }
    })
  }
  var len = arrays.length
  for (var [key, value] of map) {
    if (value === len) {
      res.push(key)
    }
  }
  return res
}

console.log(_.intersection([2, 1], [4, 2], [1, 2]))
console.log(Myintersection([2, 1], [4, 2], [1, 2]))