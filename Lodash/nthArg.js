// _.nthArg([n=0])
// 创建一个函数， 这个函数返回第n个参数，如果n为负数，则返回从结尾开始的第n个参数
function MynthArg(n) {
  return function(...args) {
    n < 0 && (n = args.length + n)
    return args[n]
  }
}
var func = MynthArg(1);
console.log(func('a', 'b', 'c', 'd'))
 
var func = MynthArg(-2);
console.log(func('a', 'b', 'c', 'd'))