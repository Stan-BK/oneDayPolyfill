// Array.prototype.reduceRight ES5
// 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
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
  var initial = len - 1
  if (argLen >= 2) {
    res = arguments[1]
  } else {
    while(initial >= 0 && !(initial in obj)) {
      initial--
    }
    if (initial < 0) {
      throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
    }
    res = obj[initial--]
  }
  for (var i = initial; i >= 0; i--) {
    if (i in obj) {
      res = fnc(res, obj[i], i, obj)
    }
  }
  return res
}