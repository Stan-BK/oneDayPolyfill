// _.inRange(number, [start=0], end)
// 检查 n 是否在 start 与 end 之间，但不包括 end。 如果 end 没有指定，那么 start 设置为0。 如果 start 大于 end，那么参数会交换以便支持负范围。
function MyinRange(number, start = 0, end = 0) {
  var max = Math.max(start, end)
  var min = Math.min(start, end)
  return number < max && number >= min
}
