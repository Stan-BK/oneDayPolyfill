// _.pullAt(array, [indexes])
// 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。
function MypullAt(arr, ...args) {
  var i = 0, res = []
  for (var idx of args) {
    res = res.concat(arr.splice(idx - i++, 1))
  }
  return res
}
var array = [5, 10, 15, 20];
var evens = MypullAt(array, 1, 3);
 
console.log(array);
// => [5, 15]
 
console.log(evens);