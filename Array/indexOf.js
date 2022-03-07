// Array.prototype.indexOf ES5
// 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
Array.prototype.MyindexOf = function(value, fromIndex) {
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length >> 0
  var idx = fromIndex >> 0
  idx = idx >= 0 ? idx : idx + len
  for (var i = idx; i < len; i++) {
    if (obj[i] === value) {
      return i
    }
  }
  return -1
}