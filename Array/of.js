// Array.of ES6
// 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
Array.Myof = function() {
  return Array.prototype.slice.call(arguments)
}