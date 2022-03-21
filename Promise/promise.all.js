const MyPromise = require('./promise')
MyPromise.all = function(promiseArr) {
  var res = [],
      len = promiseArr.lenght

  return new MyPromise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      if (promise instanceof MyPromise) {
        promise.then(value => {
          res[index] = value
          isAllResolve(resolve)
        }, reject)
      } else {
        res[index] = promise
        isAllResolve(resolve)
      }
    })
  })

  function isAllResolve(resolve) {
    if (res.length === len) {
      resolve(res)
    }
  }
}