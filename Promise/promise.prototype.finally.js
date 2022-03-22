const MyPromise = require('./promise')
MyPromise.prototype.finally = function(onFinally) {
  return this.then((value) => {
    return MyPromise.resolve(onFinally()).then(() => value)
  }, (reason) => {
    return MyPromise.resolve(onFinally()).then(() => { throw reason }, (error) => { throw error })
  })
}