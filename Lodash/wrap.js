// _.wrap(value, [wrapper=identity])
// 创建一个函数。提供的 value 包装在 wrapper 函数的第一个参数里。 任何附加的参数都提供给 wrapper 函数。 被调用时 this 绑定在创建的函数上。
function Mywrap(value, fnc) {
  return function(...args) {
    return fnc(value, ...args)
  }
}
