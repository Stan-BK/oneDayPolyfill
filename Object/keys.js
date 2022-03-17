// Object.keys ES5
// 返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
Object.Mykeys = function(obj) {
  if (obj == undefined) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError(obj + 'is not an object')
  }
  var arr = []
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push(key)
    }
  }
  return arr
}

