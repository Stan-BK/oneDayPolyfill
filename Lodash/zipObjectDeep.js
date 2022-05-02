// _.zipObjectDeep([props=[]], [values=[]])
// 这个方法类似_.zipObject，除了它支持属性路径。
const _ = require('lodash')
const reg = /(\w+)(\[\d+\])/
const arrReg = /\[(\d+)\]/
function MyzipObjectDeep(props, values) {
  let obj = {}
  for (let i = 0; i < props.length; i++) {
    setProp(props[i], i)
  }
  function setProp(str, idx) {
    let props = str.split('.')
    for (let i = 0; i < props.length; i++) {
      let prop = props[i]
      let res = prop.match(reg)
      if (res) {
        props[i] = res[1]
        props.splice(i + 1, 0, res[2])
      }
    }
    let i = 0
    let len = props.length
    let isArray = props[0].match(arrReg)
    if (len > 1) {
      if (isArray) {
        i++
        deep(obj, isArray[1])
      } else {
        deep(obj, props[i++])
      }
    } else {
      if (isArray) {
        obj[isArray[1]] = values[idx]
      } else {
        obj[props[0]] = values[idx]
      }
    }
    function deep(target, key) {
      let prop = props[i++]
      let isArray = arrReg.test(prop)
      if (isArray) {
        if (!target[key]) {
          target[key] = []
        }
      } else {
        if (!target[key]) {
          target[key] = {}
        }
      }
      if (i === len) {
        target[key][prop] = values[idx]
        return
      }
      if (isArray) {
        deep(target[key], prop.match(arrReg)[1])
      } else {
        deep(target[key], prop)
      }
    }
  }
  return obj
}
console.log(_.zipObjectDeep(['[0].d', 'a.[0].c', 'a.b[1].d'], [1, 2, 3]))
console.log(MyzipObjectDeep(['[0].d', 'a.[0].c', 'a.b[1].d'], [1, 2, 3]))