import { watch, reactive } from "vue"

export interface URLSearchParamsOptions<T> {
  removeNullishValues?: boolean
  removeFalsyValues?: boolean
  initialValue?: T
}

export default function<T>(
  mode: 'history' | 'hash' | 'hash-params' = 'history',
  options: URLSearchParamsOptions<T> = {}
) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false
  } = options
  let params = reactive<Record<string,string>>(initialValue)

  function getUrlParams() {
    if (!document) {
      return
    }

    if (mode === 'hash') {
      if (document.location.hash.includes('?')) {
        let search: string[] | string = document.location.hash.split('?')
        search = search[search.length - 1]
        getParamsItems(search)
      } else 
        getParamsItems('')
    } else if (mode === 'history') {
      const search = document.location.search.slice(1)
      getParamsItems(search)
    } else {
      if (document.location.hash.includes('#')) {
        let search: string[] | string = document.location.hash.split('#')
        search = search[search.length - 1]
        getParamsItems(search)
      }
    }

  }

  function getParamsItems(url: string | Record<string, string> | string[][] | URLSearchParams | undefined) {
    const urlSearchParams = new URLSearchParams(url)
    const usedKey = Object.keys(params)
    for (let [key, value] of urlSearchParams.entries()) {
      if (removeFalsyValues && !Boolean(value)) {
        delete params[key]
      } else if (removeNullishValues && value == undefined){
        delete params[key]
      } else {
        params[key] = value
      }
      usedKey.push(key)
    }
    
    Object.keys(params).forEach(key => {
      if (!usedKey.includes(key)) {
        delete params[key]
      }
    })

  }

  getUrlParams()
  window && window.addEventListener('popstate', getUrlParams)
  window && window.addEventListener('hashchange', getUrlParams)

  let stopWatch = watch(params, updateUrl)

  function updateUrl() {
    stopWatch()
    window.history.replaceState(
      window.history.state,
      window.document.title,
      window.location.pathname + '?' + new URLSearchParams(params).toString(),
    )
    stopWatch = watch(params, updateUrl)
  }
  return params
}