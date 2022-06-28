import type { MaybeRef } from "types/types"
import { ref, shallowRef, unref, watch } from "vue"

export interface Serializer<T>{
  read(raw: string): T
  write(value: T): string
}

export const StorageSerializers: Record<'boolean' | 'object' | 'number' | 'any' | 'string' | 'map' | 'set' | 'date', Serializer<any>> = {
  boolean: {
    read: (v: any) => v === 'true',
    write: (v: any) => String(v),
  },
  object: {
    read: (v: any) => JSON.parse(v),
    write: (v: any) => JSON.stringify(v),
  },
  number: {
    read: (v: any) => Number.parseFloat(v),
    write: (v: any) => String(v),
  },
  any: {
    read: (v: any) => v,
    write: (v: any) => String(v),
  },
  string: {
    read: (v: any) => v,
    write: (v: any) => String(v),
  },
  map: {
    read: (v: any) => new Map(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from((v as Map<any, any>).entries())),
  },
  set: {
    read: (v: any) => new Set(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from(v as Set<any>)),
  },
  date: {
    read: (v: any) => new Date(v),
    write: (v: any) => v.toISOString(),
  },
}

export function  guessSerializerType<T extends(string | number | boolean | object | null)>(rawInit: T) {
  return rawInit == null
    ? 'any'
    : rawInit instanceof Set
      ? 'set'
      : rawInit instanceof Map
        ? 'map'
        : rawInit instanceof Date
          ? 'date'
          : typeof rawInit === 'boolean'
            ? 'boolean'
            : typeof rawInit === 'string'
              ? 'string'
              : typeof rawInit === 'object'
                ? 'object'
                : Array.isArray(rawInit)
                  ? 'object'
                  : !Number.isNaN(rawInit)
                      ? 'number'
                      : 'any'
}

export interface Options<T> {
  deep?: boolean,
  listenToStorageChanges?: boolean,
  writeDefaults?: boolean,
  serializer?: Serializer<T>,
  onError?: (error: unknown) => void,
  shallow?: boolean
}

export default function<T>(
  key: string,
  initialValue: MaybeRef<T>,
  storage?: Storage,
  options: Options<T> = {}
) {
  const {
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    onError = (error) => { console.error(error) },
    shallow = false
  } = options
  const data = (shallow ? shallowRef : ref)(initialValue)
  const rawData = unref(initialValue)
  const type = unref(initialValue)
  const serialize = options.serializer || StorageSerializers[guessSerializerType(type) ]
  if (!storage) {
    storage = window.localStorage
  }
  watch(data, (newValue) => {
    if (newValue == null) {
      storage.removeItem(key)
    } else {
      storage.setItem(key, serialize.write(newValue))
    }
  })
  if (window) {
    window.addEventListener('storage', updateData)
  }
  updateData()
  return data

  function updateData(e?: StorageEvent) {
    if (e && e.key !== key) return
    data.value = readData(e)
  }

  function readData(e?: StorageEvent) {
    if (e && e.key !== key) return

    const raw = e ? e.newValue : storage.getItem(key)
    if (raw == null) {
      storage.setItem(key, serialize.write(rawData))
      return rawData
    } else {
      return serialize.read(raw)
    }
  }
}