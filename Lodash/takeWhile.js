// _.takeWhile(array, [predicate=_.identity])
// 从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。
const isEqual = require('./baseMethods/isEqual')
const typeOf = require('./baseMethods/typeOf')
const _ = require('lodash')
function MytakeWhile(arr, fnc) {
  var type = typeOf(fnc)
  if (type !== 'function') {
    if (type === 'object') {
      fnc = ((obj) => 
        (item) => isEqual(item, obj)
      )(fnc)
    } else if (type === 'array'){
      fnc = (([key, value]) => 
        (item) => item[key] === value
      )(fnc)
    } else {
      fnc = ((key) => 
        (item) => item[key]
      )(fnc)
    }
  }
  var res = []
  for (var i = 0; i < arr.length; i++) {
    if (fnc(arr[i])) {
      res.push(arr[i])
    } else {
      return res
    }
  }
  return res
}
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false},
  { 'user': 'pebbles', 'active': true }
];
 
console.log(_.takeWhile(users, function(o) { return !o.active; }))
console.log(MytakeWhile(users, function(o) { return !o.active; }))
// => objects for ['barney', 'fred']
 
console.log(_.takeWhile(users, { 'user': 'barney', 'active': false }))
console.log(MytakeWhile(users, { 'user': 'barney', 'active': false }))
// => objects for ['barney']
 
console.log(_.takeWhile(users, ['active', false]))
console.log(MytakeWhile(users, ['active', false]))
// => objects for ['barney', 'fred']
 
console.log(_.takeWhile(users, 'active'))
console.log(MytakeWhile(users, 'active'))
// => []