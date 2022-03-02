// Array.prototype.find ES6
// 查找出数组中符合回调函数判断的第一项元素并将其返回，未找到返回undefined
Array.prototype.Myfind = function(fnc, thisArg) {
  if (typeof fnc !== 'function') {
    throw new Error(fnc + 'is not a function')
  }
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length >> 0
  var res
  for (var i = 0; i < len; i++) {
    var res = fnc.call(thisArg, obj[i], i, obj)
    if (res) {
      return obj[i]
    }
  }

  return undefined
}
