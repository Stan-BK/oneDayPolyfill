// _.countBy(collection, [iteratee=_.identity])
// 创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（注：迭代次数）。 iteratee 调用一个参数：(value)。
const _ = require('lodash')
function MycountBy(collection, fnc) {
  if (typeof fnc !== 'function') {
    fnc = ((key) => 
      item => item[key]
    )(fnc)
  }
  var res = {}
  for (var i = 0; i < collection.length; i++) {
    var item = fnc(collection[i])
    if (!res[item]) {
      res[item] = 1
    } else {
      res[item]++
    }
  }
  return res
}
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor))
console.log(MycountBy([6.1, 4.2, 6.3], Math.floor))

console.log(_.countBy(['one', 'two', 'three', 'four'], 'length'))
console.log(MycountBy(['one', 'two', 'three', 'four'], 'length'))