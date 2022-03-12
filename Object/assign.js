// Object.assign ES6
// 将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
Object.Myassign = function(target) {
  if (target == undefined) {
    throw new TypeError('Cannot convert null or undefined to object')
  }
  var obj = Object(target)
  var argLen = arguments.length
  for(var i = 1; i < argLen; i++) {
    origin = Object(arguments[i])
    for (var key in origin) {
      if (Object.prototype.hasOwnProperty.call(origin, key)) {
        obj[key] = origin[key]
      }
    }
  }
  return obj
}

var obj = {a: 1}
var obj2 = Object.create(obj)
obj2.b = 2
Object.defineProperty(obj2, 'c', {
  value: 3
})
var obj3 = Object.assign({}, obj2)
var obj4 = Object.Myassign({}, obj2)
console.log(obj3)
console.log(obj3.a)
console.log(obj4)
console.log(obj4.a)