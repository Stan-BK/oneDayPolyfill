// _.truncate([string=''], [options=])
// 截断string字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."。
function Mytruncate(str = '', options = {}) {
  let { length, separator, omission } = options
  length = length || 30
  omission = omission || '...'
  if (str.length > length) {
    let len = omission.length
    if (len > str.length) {
      return omission.slice(0, str.length)
    } else {
      let idx
      if (separator) {
        const reg = new RegExp(separator, 'g')
        const res = str.match(reg)
        if (res) {
          idx = str.lastIndexOf(res.at(-1))
        } else {
          idx = str.length - len
        }
        return str.slice(0, idx) + omission
      }
      return str.slice(0, str.length - len - 1) + omission
    }
  } else {
    return str
  }
}

console.log(Mytruncate('hi-diddly-ho there, neighborino'))
// => 'hi-diddly-ho there, neighbo...'
 
console.log(Mytruncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
}))
// => 'hi-diddly-ho there,...'
 
console.log(Mytruncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
}))
// => 'hi-diddly-ho there...'
 
console.log(Mytruncate('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
}))
// => 'hi-diddly-ho there, neig [...]'