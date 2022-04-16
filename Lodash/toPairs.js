// _.toPairs(object)
// 创建一个object对象自身可枚举属性的键值对数组。如果object 是 map 或 set，返回其条目。
const _ = require('lodash')
function MytoPairs(obj) {
  var res = []
  for (var item of Object.keys(obj)) {
    res.push([item, obj[item]])
  }
  return res
}
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
console.log(_.toPairs(new Foo))
console.log(MytoPairs(new Foo))