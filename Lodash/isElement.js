// _.isElement(value)
// 检查value是否可能是Dom元素
function MyisElement(value) {
  return typeof value === 'object' && value.nodeType === 1
}