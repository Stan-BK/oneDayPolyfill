// _.isArrayLikeObject(value)
// 这个方法类似_.isArrayLike。除了它还检查value是否是个对象。
function MyisArrayLikeObject(val) {
  return val.length != undefined && typeof val === 'object'
}