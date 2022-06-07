// _.bindAll(object, methodNames)
// 绑定一个对象的方法到对象本身，覆盖现有的方法。
function MybindAll(obj, methodNames) {
  const fnc = obj[methodNames]
  obj[methodNames] = fnc.bind(obj)
}
var view = {
  'label': 'docs',
  'click': function() {
    console.log('clicked ' + this.label);
  }
};
 
MybindAll(view, ['click']);
var obj = {}
obj.click = view.click