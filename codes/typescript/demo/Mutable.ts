type Mutable<T> = {
    -readonly [K in keyof T]: T[K]
}

interface MutableTestTodo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
}

type MutableTodo = Mutable<MutableTestTodo> // { title: string; description: string; completed: boolean; }
