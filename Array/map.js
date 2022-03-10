// Array.prototype.map ES5
// 遍历数组每一项元素并按指定函数执行，函数执行结果集合以数组形式返回
Array.prototype.Mymap = function(fnc, thisArg) {
  if (typeof fnc !== 'function') {
    throw new Error(fnc + 'is not a function')
  }
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length
  var res = Array(len)
  for (var i = 0; i < len; i++) {
    if (i in obj)
      res[i] = (fnc.call(thisArg, obj[i], i, obj))
  }
  return res
}