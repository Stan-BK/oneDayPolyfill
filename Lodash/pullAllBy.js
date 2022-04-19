// _.pullAllBy(array, values, [iteratee=_.identity])
// 方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： (value)。
const _ = require('lodash')
function MypullAllBy(arr, other, fnc) {
  if (typeof fnc !== 'function') {
    fnc = ((fnc) => 
      item => item[fnc]
    )(fnc)
  }
  var k = 0
  var newArr = arr.map(item => fnc(item))
  other = other.map(item => fnc(item))
  for (var i = 0; i < newArr.length; i++) {
    if (other.includes(newArr[i])) {
      arr.splice(i - k++, 1)
    }
  }
  return arr
}
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
MypullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);