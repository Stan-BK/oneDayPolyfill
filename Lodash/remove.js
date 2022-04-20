// _.remove(array, [predicate=_.identity])
// 移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。
function Myremove(arr, fnc) {
  var res = []
  if (typeof fnc !== 'function') {
    fnc = ((fnc) => 
      item => item[fnc]
    )(fnc)
  }
  for (var i = 0; i < arr.length; ) {
    if (fnc(arr[i])) {
      res = res.concat(arr.splice(i, 1))
      continue
    }
    i++
  }
  return res
}
var array = [1, 2, 3, 4];
var evens = Myremove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);