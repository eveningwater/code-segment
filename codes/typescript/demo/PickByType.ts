type PickByType<T, U> = {
    [K in keyof T as T[K] extends U ? K : never]: T[K]
}

type OnlyBooleanPickByType = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }