// Array.prototype.forEach ES5
// 遍历每一个数组项并传入回调函数执行
Array.prototype.MyforEach = function(fnc, thisArg) {
  if (typeof fnc !== 'function') {
    throw new Error(fnc + 'is not a function')
  }
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length >> 0
  for (var i = 0; i < len; i++) {
    if (i in obj) {
      fnc.call(thisArg, obj[i], i, obj)
    }
  }
  
  return undefined
}