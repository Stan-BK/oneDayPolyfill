// _.without(arr, values)
// 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较。
function Mywithout(arr, ...others) {
  var set = new Set(others), res = []
  for (var i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}