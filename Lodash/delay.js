// _.delay(func, wait, [args])
// 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func。
function Mydelay(fnc, wait, ...args) {
  setTimeout(fnc, wait, ...args)
}