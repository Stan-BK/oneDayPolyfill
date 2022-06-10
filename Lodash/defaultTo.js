// _.defaultTo(value, defaultValue)
// 检查value，以确定一个默认值是否应被返回。如果value为NaN, null, 或者 undefined，那么返回defaultValue默认值。
function MydefaultTo(val, defaultValue) {
  if (val == undefined || val !== val) {
    return defaultValue
  }
}