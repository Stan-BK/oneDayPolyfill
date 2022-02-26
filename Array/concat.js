// Array.prototype.concat ES3
// 将数组进行合并，返回新数组
Array.prototype.Myconcat = function() {
  var toStr = Object.prototype.toString
  if (this == undefined) {
    throw new Error("this can't be null or undefined")
  }
  var newArr = []
  if (toStr.call(this) !== '[object Array]') {
    newArr.push(this)
  } else {
    var len = this.length
    for (var i = 0; i < len; i++) {
      newArr[i] = this[i]
    }
  }
  var arg = arguments
  
  for (var i = 0; i < arg.length; i++ ) {
    if (toStr.call(arg[i]) === '[object Array]') {
        newArr.push.apply(newArr, arg[i])
    } else {
      newArr.push(arg[i])
    }
  }
  return newArr
}
console.log(Array.prototype.Myconcat.call(1, 1))