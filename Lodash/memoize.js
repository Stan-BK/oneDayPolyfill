// _.memoize(func, [resolver])
// 创建一个会缓存 func 结果的函数。 如果提供了 resolver ，就用 resolver 的返回值作为 key 缓存函数的结果。 默认情况下用第一个参数作为缓存的 key。 func 在调用时 this 会绑定在缓存函数上。
// 注意: 缓存会暴露在缓存函数的 cache 上。 它是可以定制的，只要替换了 _.memoize.Cache 构造函数，或实现了Map 的 delete, get, has, 和 set方法。
const _ = require('lodash')
function Mymemoize(fnc, resolver) {
  var cache = {}
  function generateCache(...args) {
    var key = args[0]
    if (cache[key]) {
      return cache[key]
    }
    var res = fnc.call(fnc, ...args)
    cache[key] = res
    return res
  }
  generateCache.cache = cache
  return generateCache
}
var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };
 
var values = Mymemoize(function(a, b) {
  return a.a + b.c
});
console.log(values(object, other))
object.a = 3
other.c = 6
console.log(values(object, other))