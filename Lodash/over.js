// _.over([iteratees=[_.identity]])
// 创建一个函数，传入提供的参数的函数并调用iteratees返回结果
function Myover(arrs) {
  return function(...args) {
    var res = []
    for (var i = 0; i < arrs.length; i++) {
      res.push(arrs[i](...args))
    }
    return res
  }
}