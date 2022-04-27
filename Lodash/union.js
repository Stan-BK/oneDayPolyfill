// _.union([arrays])
// 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
function Myunion(...arrays) {
  var set = new Set(), res = []
  for (var i = 0; i < arrays.length; i++) {
    var arr = arrays[i]
    for (var val of arr) {
      if (!set.has(val)) {
        set.add(val)
        res.push(val)
      }
    }
  }
  return res
}
console.log(Myunion([2], [1, 2]))