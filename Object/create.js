// Object.create ES5
// 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
Object.Mycreate = function(obj, propertiesObject) {
  // if (obj === undefined || typeof obj != 'object' || typeof obj != 'function') {
  //   throw new TypeError('Object prototype may only be an Object or null')
  // }
  // function F() {}
  // F.prototype = obj
  // var newObj = new F()
  // if (typeof propertiesObject === 'object') {
  //   if (propertiesObject === null) {
  //     throw new TypeError('Cannot convert undefined or null to object')
  //   }
  //   for (var i in propertiesObject) {
  //     if (Object.prototype.hasOwnProperty.call(propertiesObject, i)) {
  //       Object.defineProperty(newObj, i, propertiesObject[i])
  //     }
  //   }
  // }
  // return newObj

  // MDN上提供的兼容性更好的版本
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object: ' + proto);
  } else if (proto === null) {
      throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
  }

  if (typeof propertiesObject !== 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

  function F() {}
  F.prototype = proto;

  return new F();
}