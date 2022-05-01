// _.zipObject([props=[]], [values=[]])
// 这个方法类似_.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。
const _ = require('lodash')
function MyzipObject(props, values) {
  var obj = {}
  for (var i = 0; i < props.length; i++) {
    var key = props[i]
    var val = values[i]
    obj[key] = val
  }
  return obj
}
console.log(_.zipObject(['a', 'b', 'c'], [1, 2, 3, 4]))
console.log(MyzipObject(['a', 'b', 'c'], [1, 2, 3, 4]))