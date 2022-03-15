// Object.entries ES2017
// 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。
Object.Myentries = function(obj) {
  if (obj == undefined) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  obj = Object(obj)
  var res = []
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res.push([key, obj[key]])
    }
  }
  return res
}