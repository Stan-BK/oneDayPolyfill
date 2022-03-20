/* Promise Polyfill
 * 实现参考Promise/A+规范，链接：https://promisesaplus.com/
 */

const PENDING = 'penging'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
  constructor(fnc) {
    this.state = PENDING
    this.value = undefined
    this.reason = undefined
    this.resolvecb = []
    this.rejectcb = []
    const resolve = (value) => { //依靠ES6箭头函数的this指向绑定当前作用域
      if (value instanceof MyPromise) {
        value.then(resolve, reject)
        return
      }
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value

        this.resolvecb.forEach(cb => {
          cb()
        })
      }
    } 
    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason

        this.rejectcb.forEach(cb => {
          cb()
        })
      }
    }
    fnc(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    const promise = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value)
            resolvePromise(promise, x, resolve, reject)
          } catch(e) {
            reject(e)
          }
        })
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason)
            resolvePromise(promise, x, resolve, reject)
          } catch(e) {
            reject(e)
          }
        })
      }
      if (this.state === PENDING) { //2.3.2.1 If x is pending, promise must remain pending until x is fulfilled or rejected.
        this.resolvecb.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value)
              resolvePromise(promise, x, resolve, reject)
            } catch(e) {
              reject(e)
            }
          })
        })
        this.rejectcb.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason)
              resolvePromise(promise, x, resolve, reject)
            } catch(e) {
              reject(e)
            }
          })
        })
      }
    })

    return promise

    function resolvePromise(promise, x, resolve, reject) {
      let called = false // 3.5 his procedure of first storing a reference to x.then, then testing that reference, and then calling that reference, avoids multiple accesses to the x.then property. 
      if (promise === x) {
        //2.3.1 If promise and x refer to the same object, reject promise with a TypeError as the reason.
        reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
        return
      }
      try {
        if ((typeof x === 'object' && x != null) || typeof x === 'function') {
          const then = x.then
          // 2.3.3.3 If then is a function, call it with x as this, first argument resolvePromise, and second argument rejectPromise
          if (typeof then === 'function') {
            then.call(x, (y) => {
              if (called) {
                return
              }
              called = true
              resolvePromise(promise, y, resolve, reject)
            }, (r) => {
              if (called) {
                return
              }
              called = true
              // resolvePromise(promise, r, resolve, reject)
              reject(r)
            })
          } else {
            resolve(x) // 2.3.3.4 If then is not a function, fulfill promise with x.
          }
        } else {
          resolve(x) //2.3.4 If x is not an object or function, fulfill promise with x.
        }
      } catch(e) {
        if (called) {
          return
        }
        called = true
        reject(e)
      }
    }
  }
}

module.exports = MyPromise


// promises-aplus-test
MyPromise.defer = MyPromise.deferred = function () {
  let deferred = {}

  deferred.promise = new MyPromise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  return deferred
}