// _.range([start=0], end, [step=1])
function Myrange(start = 0) {
  var step
  if (arguments[2] != undefined) {
    step = arguments[2]
  } else {
    step = start < 0 && arguments[1] == undefined ? -1 : 1
  }
  var end = arguments[1] || start
  start = arguments[1] != undefined ? start :  0
  var res = []
  if (step === 0) {
    res = Array.from({ length: end - start }).fill(start)
  } else {
    for (var i = start; Math.abs(i) < Math.abs(end); i += step) {
      res.push(i)
    }
  }
  return res
}
console.log(Myrange(4))
// => [0, 1, 2, 3]
 
console.log(Myrange(-4))
// => [0, -1, -2, -3]
 
console.log(Myrange(1, 5))
// => [1, 2, 3, 4]
 
console.log(Myrange(0, 20, 5))
// => [0, 5, 10, 15]
 
console.log(Myrange(0, -4, -1))
// => [0, -1, -2, -3]
 
console.log(Myrange(1, 4, 0))
// => [1, 1, 1]
 
console.log(Myrange(0))
// => []
