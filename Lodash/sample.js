// _.sample(collection)
// 从collection（集合）中获得一个随机元素。
function Mysample(collection) {
  var len = collection.length
  return collection[Math.floor(Math.random() * len)]
}
console.log(Mysample([1, 2, 3, 4]))