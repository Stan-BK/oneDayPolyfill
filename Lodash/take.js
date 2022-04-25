// _.take(array, [n=1])
// 创建一个数组切片，从array数组的起始元素开始提取n个元素。
function Mytake(arr, n = 1) {
  var res = []
  if (n > arr.length) {
    n = arr.length
  }  
  for (var i = 0; i < n; i++) {
    res.push(arr[i])
  }
  return res
}