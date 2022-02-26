// Array.isArray ES5
// 接收一个参数，判断其是否为数组类型
Array.MyisArray = function(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]'
}