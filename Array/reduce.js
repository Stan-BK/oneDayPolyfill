// Array.prototype.reduce ES5
// 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
Array.prototype.Myreduce = function(fnc) {
  if (typeof fnc !== 'function') {
    throw new Error(fnc + 'is not a function')
  }
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length >> 0
  var argLen = arguments.length
  var res = argLen >= 2 ? i  : obj[0]
  var initial = 0
  if (argLen >= 2) {
    res = arguments[1]
  } else {
    while(initial < len && !(initial in obj)) {
      initial++
    }
    if (initial >= len) {
      throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
    }
    res = obj[initial++]
  }
  for (var i = initial; i < len; i++) {
    if (i in obj) {
      res = fnc(res, obj[i], i, obj)
    }
  }
  return res
}