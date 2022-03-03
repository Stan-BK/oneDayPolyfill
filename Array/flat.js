// Array.prototype.flat ES2019
// 按照指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
Array.prototype.Myflat = function(depth) {
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  
  if (depth == undefined) {
    depth = 1
  } else {
    depth = Number(depth)
  }
  if (!depth || depth <= 0) {
    return this
  }

  
  var obj = Object(this)
  var arr
  var len = obj.length >> 0
  
  var toStr = Object.prototype.toString
  if (len) {
    arr = Array.prototype.slice.call(obj) // 类数组转换为数组
  } else {
    return []
  }

  return arr.reduce((prev, cur) => {
    var res = cur
    if (toStr.call(cur) === '[object Array]') {
      res = cur.Myflat(depth - 1)
    }
    return prev.concat(res)
  }, [])
}