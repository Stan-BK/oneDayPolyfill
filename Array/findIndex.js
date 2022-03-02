// Array.prototype.findIndex ES6
// 查找出数组中符合回调函数判断的第一项元素并返回其下标，未找到返回-1
Array.prototype.MyfindIndex = function(fnc, thisArg) {
  if (typeof fnc !== 'function') {
    throw new Error(fnc + 'is not a function')
  }
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length >> 0
  for (var i = 0; i < len; i++) {
    if (fnc.call(thisArg, obj[i], i, obj))
      return i
  }

  return -1
}
