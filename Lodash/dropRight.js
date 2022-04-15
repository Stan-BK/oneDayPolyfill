// _.dropRight(array, [n=1])
// 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
function MydropRight(arr, n = 1) {
  var res = []
  for (var i = 0; i < arr.length - n; i++) {
    res.push(arr[i])
  }
  return res
}