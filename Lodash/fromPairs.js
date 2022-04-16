// _.fromPairs(pairs)
// 方法返回一个由键值对pairs构成的对象。
const _ = require('lodash')
function MyfromPairs(arr) {
  var obj = {}
  for (var item of arr) {
    obj[item[0]] = item[1]
  }
  return obj
}
console.log(_.fromPairs([['fred', 30], ['barney', 40]]))
console.log(MyfromPairs([['fred', 30], ['barney', 40]]))