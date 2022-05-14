// _.defer(func, [args])
// 推迟调用func，直到当前堆栈清理完毕。 调用时，任何附加的参数会传给func。
function Mydefer(fnc, ...args) {
  setTimeout(fnc, 0, ...args);
}