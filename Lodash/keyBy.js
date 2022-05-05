// _.keyBy(collection, [iteratee=_.identity])
// 创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成key（键）的最后一个元素。iteratee（迭代函数）调用1个参数：(value)。
const _ = require('lodash')
function MykeyBy(collection, fnc) {
  if (typeof fnc !== 'function') {
    fnc = ((key) =>
      item => item[key]
    )(fnc)
  }
  var res = {}
  for (var i = 0; i < collection.length; i++) {
    var item = collection[i]
    var key = fnc(item)
    
    res[key] = item
  }
  return res
}
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 },
  { 'dir': 'back', 'code': 97 }
];
 
console.log(MykeyBy(array, function(o) {
  return String.fromCharCode(o.code);
}))
console.log(_.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
}))
console.log(MykeyBy(array, 'dir'))