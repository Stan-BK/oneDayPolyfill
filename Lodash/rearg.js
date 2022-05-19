// _.rearg(func, indexes)
// 创建一个函数,调用func时，根据指定的 indexes 调整对应位置参数。其中第一个索引值是对应第一个参数，第二个索引值是作为第二个参数，依此类推。
function Myrearg(fnc, indexes) {
  return function(...args) {
    var arg = []
    for (var i = 0; i < indexes.length; i++) {
      arg[i] = args[indexes[i]]
    }
    return fnc(...arg)
  }
}
var rearged = Myrearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);
 
console.log(rearged('b', 'c', 'a'))