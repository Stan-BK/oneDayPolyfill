// _.clamp(number, [lower], upper)
// 返回限制在 lower 和 upper 之间的值。
function Myclamp(...args) {
  var [n1, n2, n3] = args
  if (args.length === 1) {
    return n1
  } else if (args.length === 2) {
    return Math.min(n1, n2)
  } else {
    var arr = [n1, n2, n3].sort((a, b) => a - b)
    return arr[1]
  }
}