// Object.values ES2017
// 返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。
Object.Myvalues = function(obj) {
  if (obj == undefined) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  obj = Object(obj)
  var arr = []
  for (var i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      arr.push(obj[i])
    }
  }
  return arr
}
var obj = {a:1,[Symbol('b')]:2}
console.log(Object.Myvalues(obj))