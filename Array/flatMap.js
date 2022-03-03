// Array.prototype.flatMap ES2020
// 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// 它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
Array.prototype.MyflatMap = function(fnc, thisArg) {
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  return this.map.call(thisArg, fnc).flap(1)
}