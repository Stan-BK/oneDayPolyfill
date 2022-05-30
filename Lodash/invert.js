// _.invert(object)
// 创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。
function Myinvert(obj) {
  var res = {}
  for (var [key, value] of Object.entries(obj)) {
    res[value] = key
  }
  return res
}
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
console.log(Myinvert(object))