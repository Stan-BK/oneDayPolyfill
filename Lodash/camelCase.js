// _.camelCase([string=''])
// 转换字符串string为驼峰写法。
function MycamelCase(str) {
  var reg = /\b(\w+)\b/g
  var res = ''
  str.replace(reg, function(n, k) {
    var s = k.toLowerCase()
    res += s.replace(/^\w/, n => n.toUpperCase())
  })
  return res.replace(/^\w/, n => n.toLowerCase())
}
console.log(MycamelCase('Foo-Bar'))