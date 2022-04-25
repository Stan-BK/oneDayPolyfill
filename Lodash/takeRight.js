// _.takeRight(array, [n=1])
// 创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
function MytakeRight(arr, n = 1) {
  var res = [], len = arr.length
  if (n > len) {
    n = len
  }
  for (var i = len - n; i < len; i++) {
    res.push(arr[i])
  }
  return res
}
console.log(MytakeRight([1, 2, 3]))
// => [3]
 
console.log(MytakeRight([1, 2, 3], 2))
// => [2, 3]
 
console.log(MytakeRight([1, 2, 3], 5))
// => [1, 2, 3]
 
console.log(MytakeRight([1, 2, 3], 0))
// => []
