// _.conformsTo(object, source)
// 通过调用断言source的属性与 object 的相应属性值，检查 object是否符合 source。当source偏应用时，这种方法和_.conforms函数是等价的。
function MyconformsTo(obj, source) {
  for (var [key, fnc] of Object.entries(source)) {
    var val = obj[key]
    if (fnc(val)) {
      return true
    } else {
      return false
    }
  }
}
var object = { 'a': 1, 'b': 2 };
 
console.log(MyconformsTo(object, { 'b': function(n) { return n > 1; } }))
 
console.log(MyconformsTo(object, { 'b': function(n) { return n > 2; } }))