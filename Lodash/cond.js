// _.cond(pairs)
// 创建了一个函数，这个函数会迭代pairs，并调用最先返回真值对应的函数。该断言函数对绑定 this 及传入创建函数的参数。
function Mycond(pairs) {
  let len = pairs.length
  return function(...args) {
    for (let i = 0; i < len; i++) {
      let fnc = pairs[i][0]
      if (fnc(...args)) {
        return pairs[i][1]()
      }
    }
  }
}
const _ = require('lodash')
var func = _.cond([
  [_.matches({ 'a': 1 }),           _.constant('matches A')],
  [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
  [_.stubTrue,                      _.constant('no match1')]
]);
 
console.log(func({ 'a': 1, 'b': 2 }))
// => 'matches A'
 
console.log(func({ 'a': 0, 'b': 1 }))
// => 'matches B'
 
console.log(func({ 'a': '1', 'b': '2' }))
// => 'no match'

var func2 = Mycond([
  [_.matches({ 'a': 1 }),           _.constant('matches A')],
  [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
  [_.stubTrue,                      _.constant('no match1')]
]);

console.log(func2({ 'a': 1, 'b': 2 }))
// => 'matches A'
 
console.log(func2({ 'a': 0, 'b': 1 }))
// => 'matches B'
 
console.log(func2({ 'a': '1', 'b': '2' }))
// => 'no match'
