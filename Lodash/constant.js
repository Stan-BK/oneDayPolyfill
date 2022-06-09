// _.constant(value)
// 创建一个返回value的函数
const _ = require('lodash')
function Myconstant(val) {
  return function() {
    return val
  }
}
var objects = _.times(2, Myconstant({ 'a': 1 }));
 
console.log(objects);
// => [{ 'a': 1 }, { 'a': 1 }]
 
console.log(objects[0] === objects[1]);
