// Object.is ES6
// 判断两个值是否为同一个值。
Object.Myis = function(a, b) {
 if (a === b) {
   return a !== 0 || 1 / a === 1 / b
 } else {
   return a !== a && b !== b // NaN不等于自身
 }
}