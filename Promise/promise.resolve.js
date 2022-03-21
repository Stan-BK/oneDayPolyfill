const MyPromise = require('./promise')
MyPromise.resolve = function(value) {
  return new MyPromise(resolve => {
    resolve(value)
  })
}