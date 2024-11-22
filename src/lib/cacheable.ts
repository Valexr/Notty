import { writable } from 'svelte/store'

export function cacheable<T>(key: string, initial: T, local?: boolean) {
    const { subscribe, set } = writable<T>(initial)
    const store = typeof window === 'object' ? local ? localStorage : sessionStorage : undefined
    const item = store?.getItem(key) || ''

    try {
        initial = item ? JSON.parse(item) : initial
    } catch {
        initial = initial
    }

    sync(initial)

    function sync(value?: T) {
        store?.setItem(key, JSON.stringify(value))
        initial = value as T
        return set(initial)
    }

    return {
        get: () => initial,
        set: (value: T) => sync(value),
        update: (fn: (arg: T) => any) => sync(fn(initial)),
        remove: () => store?.removeItem(key),
        clear: () => store?.clear(),
        subscribe
    }
}