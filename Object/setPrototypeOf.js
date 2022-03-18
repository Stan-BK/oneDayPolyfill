// Object.setPrototypeOf ES6
// 为一个目标对象设置原型
Object.MysetPrototypeOf = function(obj, prototype) {
  if (typeof prototype !== 'object' && typeof prototype !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null: ' + prototype)
  }
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    return obj
  }
  obj.__proto = prototype
  return obj
}