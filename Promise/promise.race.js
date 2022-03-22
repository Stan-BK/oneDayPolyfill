const MyPromise = require('./promise')
MyPromise.race = function(promiseArr) {
  return new MyPromise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      if (promise instanceof MyPromise) {
        promise.then(resolve, reject)
      } else {
        MyPromise.resolve(promise).then(resolve, reject)
      }
    })
  })
}