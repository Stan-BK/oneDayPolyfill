// _.partition(collection, [predicate=_.identity])
// 创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，第二组包含predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用1个参数：(value)。
const _ = require('lodash')
function Mypartition(collection, fnc) {
  var type = typeof fnc
  if (Object.prototype.toString.call(fnc) === '[object Array]') {
    fnc = (([key, value]) => 
      item => item[key] === value
    )(fnc)
  } else if (type === 'object') {
    fnc = (item =>
        (obj) => {
          for (var [key, value] of Object.entries(item)) {
            if (obj[key] !== value) {
              return false
            }
          }
          return true
        }
      )(fnc)
  } else if (type === 'string') {
    fnc = (key =>
      item => item[key]
    )(fnc)
  }
  var res = [[], []]
  for (var i = 0; i < collection.length; i++) {
    var item = collection[i]
    fnc(item) ? res[0].push(item) : res[1].push(item)
  }
  return res
}
var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
 
console.log(_.partition(users, function(o) { return o.active; }))
console.log(Mypartition(users, function(o) { return o.active; }))

console.log(_.partition(users, { 'age': 1, 'active': false }))
console.log(Mypartition(users, { 'age': 1, 'active': false }))

console.log(_.partition(users, ['active', false]))
console.log(Mypartition(users, ['active', false]))

console.log(_.partition(users, 'active'))
console.log(Mypartition(users, 'active'))

console.log(_.partition(users, (o) => o.age > 0))
console.log(Mypartition(users, (o) => o.age > 0))