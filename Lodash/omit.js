// _.omit(object, [props])
// 反向版_.pick; 这个方法一个对象，这个对象由忽略属性之外的object自身和继承的可枚举属性组成。（注：可以理解为删除object对象的属性）。
function Myomit(obj, props) {
  var res = {}
  for (var [key, value] of Object.entries(obj)) {
    if (!props.includes(key)) {
      res[key] = value
    }
  }
  return res
}
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
console.log(Myomit(object, ['a', 'c']))