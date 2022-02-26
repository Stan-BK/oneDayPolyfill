// Array.prototype.copyWithin ES6
// 直接操作原数组，将数组的一部分复制后覆盖同一数组的一部分，不会改变原数组长度，返回原数组
Array.prototype.MycopyWithin = function() {
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = this.length >> 0

  var arg1 = arguments[0] >> 0
  var target = arg1 < 0 ? Math.max(arg1 + len, 0) : Math.min(arg1, len)
  var arg2 = arguments[1] >> 0
  var start = arg2 < 0 ? Math.max(arg2 + len, 0) : Math.min(arg2, len)
  var arg3 = arguments[2] >> 0
  var end = arg3 < 0 ? Math.max(arg3 + len, 0) : Math.min(arg3, len)
  var count = Math.min(end - start, len - target)
  var direction = 1
  console.log(start, end, target, direction, count)
  if (target - start >=0 ) {
    direction =  -1
    start += count - 1
    target += count - 1
  }
  while(count) {
    if (start in obj) {
      obj[target] = obj[start]
    }
    start += direction
    target += direction
    count--
  }
  return obj
}

var arr = [1,2,3,4,5]
console.log(arr.MycopyWithin(2,2, -1))
var arr2 = [1,2,3,4,5]
console.log(arr2.copyWithin(2,2, -1))