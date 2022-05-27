// _.mean(array)
// 计算 array 的平均值。
function Mymean(arr) {
  return arr.reduce((prev, cur) => prev + cur) / arr.length
}

console.log(Mymean([4, 2, 8, 6]))