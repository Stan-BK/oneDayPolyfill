// Array.prototype.join ES6
// 将数组每一项以提供的字符进行连接，最终返回拼接后的字符串
Array.prototype.Myjoin = function(s) {
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  if (s === undefined) {
    s = ','
  } else {
    s = String(s)
  }
  var str = ''
  for (var i = 0; i < this.length; i++) {
    str += this[i]
    str += s
  }
  return str
}
var arr = [1,2,3]
console.log(arr.join())
console.log(arr.join(''))
console.log(arr.join(','))
console.log(arr.join(null))
console.log(Array.prototype.join.call(123, 1))
console.log(Array.prototype.join.call('123', 1))
console.log(Array.prototype.join.call({0:1,1:2}, 1))
console.log(Array.prototype.join.call({0:1,1:2,length:2}, 1))