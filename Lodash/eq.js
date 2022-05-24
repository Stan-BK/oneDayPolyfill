// _.eq(value, other)
// 执行SameValueZero 比较两者的值，来确定它们是否相等。
const _ = require('lodash')
function Myeq(val, other) {
  return val === other || (val !== val && other !== other)
}
var object = { 'a': 1 };
var other = { 'a': 1 };

console.log(_.eq(object, object))
console.log(Myeq(object, object))
 
console.log(_.eq(object, other))
console.log(Myeq(object, other))
 
console.log(_.eq('a', 'a'))
console.log(Myeq('a', 'a'))
 
console.log(_.eq('a', Object('a')))
console.log(Myeq('a', Object('a')))
 
console.log(_.eq(NaN, NaN))
console.log(Myeq(NaN, NaN))