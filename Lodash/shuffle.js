// _.shuffle(collection)
// 创建一个被打乱值的集合。 使用Fisher-Yates shuffle 版本。
const _ = require('lodash')
function Myshuffle(collection) {
  var len = collection.length, temp
  var res = JSON.parse(JSON.stringify(collection))
  for (var i = len - 1; i >= 0; i--) {
    var idx = Math.floor(Math.random() * (i + 1))
    temp = res[idx]
    res[idx] = res[i]
    res[i] = temp
  }
  return res
}
var arr = [1,2,3]
console.log(_.shuffle(arr))
console.log(Myshuffle(arr))