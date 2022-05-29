// _.defaults(object, [sources]
// 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。
function Mydefaults(obj, sources) {
  for (var [key, value] of Object.entries(sources)) {
    if (obj[key] === undefined) {
      obj[key] = value
    }
  }
  return obj
}
