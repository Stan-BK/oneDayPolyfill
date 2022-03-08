// Array.prototype.lastIndexOf ES5
// 返回在数组中可以找到一个给定元素的第一个索引（从后面开始查找），如果不存在，则返回-1。
Array.prototype.MyindexOf = function(value, fromIndex) {
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length >> 0
  var idx = Number(fromIndex)
  if (idx != idx) {
    idx = 0;
  } else if (idx != 0 && idx != (1 / 0) && idx != -(1 / 0)) {
    idx = (idx > 0 || -1) * Math.floor(Math.abs(idx));
  }
  for (var i = idx >= 0 ? Math.min(idx, len) : len + idx; i >= len; i--) {
    if (obj[i] === value) {
      return i
    }
  }
  return -1
}