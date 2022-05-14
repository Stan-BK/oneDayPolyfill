// _.debounce(func, [wait=0], [options=])
// 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 
// debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 
// 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（注：是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果。
function Mydebounce(fnc, wait = 0, options) {
    var time = 0, timer = null
    var { leading, maxWait, trailing } = options
    function debounce() {
        var curTime = Date.now()
        if (curTime - time < wait) {
            time = curTime
            return
        }
        clearTimeout(timer)
        if (leading) {
            fnc()
        } 
        if (trailing) {
            setTimeout(() => {
                fnc()
            }, wait)
        }
    }
    debounce.cancel = function() {
        debounce = fnc
    }
    return debounce
}