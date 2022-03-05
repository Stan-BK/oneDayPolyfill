// Array.from ES6
// 将一个类似数组或可迭代对象创建一个新的浅拷贝数组实例
Array.Myfrom = function(arrayLike) {
  var fnc = arguments[1]
  var thisArg = arguments[2]

  if (fnc !== undefined && typeof fnc !== 'function') {
    throw new Error(fnc + ' is not a function')
  }

  var obj = Object(arrayLike)
  var len = obj.length >> 0
  var arr = []
  for (var i = 0; i < len; i++) {
    arr[i] = fnc ? fnc.call(thisArg, obj[i]) : obj[i]
  }
  return arr
}
console.log(Array.Myfrom(1))
console.log(Array.Myfrom({0:1,2:2,length:2}))
console.log(Array.Myfrom([1,2,3], item => item * 2))
console.log(Array.Myfrom(1, 0))