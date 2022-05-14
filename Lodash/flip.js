// _.flip(func)
// 创建一个函数，调用func时候接收翻转的参数。
function Myfilp(fnc) {
  return function(...args) {
    fnc(args.reverse())
  }
}