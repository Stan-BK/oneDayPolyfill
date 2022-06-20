// _.slice(array, [start=0], [end=array.length])
// 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。
function Myslice(arr, start = 0, end = arr.length) {
  var res = []
  for (var i = start; i < end; i++) {
    res.push(arr[i])
  }
  return res
}