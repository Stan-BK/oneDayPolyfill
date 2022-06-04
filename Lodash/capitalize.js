// _.capitalize([string=''])
// 转换字符串string首字母为大写，剩下为小写。
const _ = require('lodash')
function Mycapitalize(str = '') {
  return str.replace(/\w/g, n => n.toLowerCase()).replace(/\w/, n => n.toUpperCase())
}
console.log(_.capitalize('bafs FEg'))
console.log(Mycapitalize('bafs FEg'))