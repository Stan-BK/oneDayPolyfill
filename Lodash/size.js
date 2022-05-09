// _.size(collection)
// 返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。
const typeOf = require('./baseMethods/typeOf')
function Mysize(collection) {
  const type = typeOf(collection)
  if (type === 'object') {
    return Object.keys(collection).length
  } else {
    return collection.length
  }
}
console.log(Mysize({ a: 1, b: 2}))