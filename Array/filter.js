// Array.prototype.filter ES5
// 将数组内符合回调函数测试的元素集合为新数组返回
Array.prototype.Myfilter = function(fnc, thisArg) {
  if (typeof fnc !== 'function') {
    throw new Error(fnc + 'is not a function')
  }
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length >> 0
  var res = []
  for (var i = 0; i < len; i++) {
    fnc.call(thisArg, obj[i], i, obj) === true && res.push(obj[i])
  }
  return res
}