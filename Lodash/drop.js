// _.drop(array, [n=1])
// 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
function Mydrop(arr, size = 1) {
  var res = []
  for (var i = size; i < arr.length; i++) {
    res.push(arr[i])
  }
  return res
}