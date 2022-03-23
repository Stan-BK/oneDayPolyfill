const MyPromise = require('./promise')
MyPromise.allSettled = function(promiseArr) {
  return new MyPromise((resolve) => {
    var res = [], sum = promiseArr.length
    promiseArr.forEach((promise, index) => {
      if (promise instanceof MyPromise) {
        promise.then(value => {
          resolveRes('fulfilled', value, index, resolve)
        }, reason => {
          resolveRes('rejected', reason, index, resolve)
        })
      } else {
        resolveRes('fulfilled', value, index, resolve)
      }
    })

    
    function resolveRes(status, value, index, resolve) {
      var obj = {
        status
      }
      if (status === 'fulfilled') {
        obj['value'] = value
      } else {
        obj['reason'] = value
      }
      res[index] = obj
      if (! --sum) {
        resolve(res)
      }
    }
  })
}