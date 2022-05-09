// _.after(n, fnc)
// _.before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func 。
const _ = require('lodash')
function Myafter(n, fnc) {
  var i = 0
  return function() {
    if (++i === n) {
      fnc()
    }
  }
}
var saves = ['profile', 'settings'];
 
var done = _.after(saves.length, function() {
  console.log('done saving!');
});

var done2 = Myafter(saves.length, function() {
  console.log('done2 saving!')
})
_.forEach(saves, async function(type) {
  done()
});
_.forEach(saves, async function(type) {
  done2()
});
