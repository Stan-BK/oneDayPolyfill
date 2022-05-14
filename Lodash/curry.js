// _.curry(func, [arity=func.length])
// 创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的func 参数的函数，可以使用 func.length 强制需要累积的参数个数。
const _ = require('lodash')
function Mycurry(fnc, arity) {
    return (function() {
        var arr = [], length = arity || fnc.length, idx = 0, places = []
        return function subCurry(...args) {
            var i = 0, temp = idx
            for (; i < places.length; i++) {
                if (i >= args.length) {
                    places.splice(0, i)
                    return subCurry
                }
                arr[places[i]] = args[i]
            }
            places = []
            if (idx === length && places.length === 0) {
                var res = fnc(...arr)
                init()
                return res
            }
            for (; i < args.length; i++) {
                if (args[i] === '_') {
                    places.push(temp + i)
                }
                if(idx !== length) {
                    arr[idx++] = args[i]
                }
                if (idx === length && places.length === 0) {
                    var res = fnc(...arr)
                    init()
                    return res
                }
            }
            return subCurry
        }

        function init() {
            arr = []
            length = arity || fnc.length
            idx = 0
            places = []
        }
    })()
}
var abc = function(a, b, c, d) {
    return [a, b, c, d];
  };
   
var curried = _.curry(abc);
var Mycurried = Mycurry(abc);

console.log(curried(1)(2)(3)(4))
console.log(Mycurried(1)(2)(3)(4))

console.log(curried(1, 2)(3, 4))
console.log(Mycurried(1, 2)(3, 4))

console.log(curried(1, 2, 3, 4))
console.log(Mycurried(1, 2, 3, 4))

console.log(curried(1)(_, _, 4)(2)(3))
console.log(Mycurried(1)('_', '_', 4)(2)(3))
