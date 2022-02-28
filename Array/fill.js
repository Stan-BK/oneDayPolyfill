// Array.prototype.fill ES6
// 用一个固定值，以指定的索引起始和终止位，填充到数组中
Array.prototype.Myfill = function() {
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length >> 0
  var padItem = arguments[0]

  var arg2 = arguments[1] || 0
  var start = arg1 < 0 ? Math.max(len + arg2, 0) : Math.min(len, arg2)

  var arg3 = arguments[2] || 0
  var end = arg1 < 0 ? Math.max(len + arg3, 0) : Math.min(len, arg3)
  var count = end - start

  while(count) {
    obj[start++] = padItem
  }
  return obj
}