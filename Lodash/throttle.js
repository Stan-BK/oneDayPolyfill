// _.throttle(func, [wait=0], [options=])
// 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。
function Mythrottle(fnc, wait = 0, options) {
  var timer = 0, hasTimeout = false, timeout = 0
  var { leading = true, trailing = true } = options
  return function() {
    var time = Date.now()
    if (time - timer < wait) {
      if (trailing && !hasTimeout) {
        hasTimeout = true
        timeout = setTimeout(() => {
          fnc()
          hasTimeout = false
        }, wait)
      }
      return
    }
    if (leading) {
      clearTimeout(timeout)
      hasTimeout = false
      fnc()
    }
    timer = time
  }
}