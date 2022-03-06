// Array.prototype.includes ES6
// 判断一个数组是否包含指定的值，有则返回true，否则返回false
Array.prototype.Myincludes = function(value, fromIndex) {
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var obj = Object(this)
  var len = obj.length >> 0
  var idx = fromIndex >> 0
  idx = idx >= 0 ? idx : idx + len
  for (var i = idx; i < len; i++) {
    if (obj[i] === value) {
      return true
    }
  }
  return false
}
console.log(Array.prototype.Myincludes.call(1, undefined))
console.log([1,2,3].includes(3))
console.log([1,2,3].includes(4))