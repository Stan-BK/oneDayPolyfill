// _.castArray(value)
// 如果value不是数组，那么强制转为数组。
function MycastArray(value) {
  var toStr = Object.prototype.toString
  return toStr.call(value) === '[object Array]' ? value 
                                                : value === undefined && arguments.length === 0 ? [] 
                                                                      : [value]
}
console.log(MycastArray(1))
 
console.log(MycastArray({ 'a': 1 }))
 
console.log(MycastArray('abc'))
 
console.log(MycastArray(null))
 
console.log(MycastArray(undefined))
 
console.log(MycastArray())
 
var array = [1, 2, 3];
console.log(MycastArray(array) === array)