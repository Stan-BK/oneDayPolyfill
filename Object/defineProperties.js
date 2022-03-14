// Object.defineProperties ES5
// 直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
Object.MydefineProperties = function(target, props) {
  var hasProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
  if (typeof target !== 'object' || target === null) {
    throw new TypeError('Object.defineProperties called on non-object')
  }
  if (props == undefined) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  var description = Object(props)
  for (var key in description) {
    var desc = description[key]
    if (hasProperty(description, key)) {
      if (typeof desc !== 'object' || desc === null) {
        throw new TypeError('Property description must be an object' + desc)
      }
      Object.defineProperty(target, i, desc)
    }
  }
  return target
}