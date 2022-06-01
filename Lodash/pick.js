// _.pick(object, [props])
// 创建一个从object中选中的属性的对象。
function Mypick(obj, props) {
  var res = {}
  for (var [key, value] of Object.entries(obj)) {
    if (props.includes(key)) {
      res[key] = value
    }
  }
  return res
}
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
console.log(Mypick(object, ['a', 'c']))