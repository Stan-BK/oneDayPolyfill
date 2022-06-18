// _.times(n, [iteratee=_.identity])
// 调用 iteratee n 次，每次调用返回的结果存入到数组中。 iteratee 调用入1个参数： (index)。
function Mytimes(n, fnc) {
  var res = []
  if (typeof fnc !== 'function') {
    fnc = ((item) => () => item)(fnc)
  }
  for (var i = 0; i < n; i++) {
    res.push(fnc(i))
  }
  return res
}
console.log(Mytimes(3, String))
// => ['0', '1', '2']
 
console.log(Mytimes(4, 0))
// => [0, 0, 0, 0]

