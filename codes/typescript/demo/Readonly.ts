// @ts-ignore
type Readonly<T> = {
    readonly [R in keyof T]: T[R]
}
interface ReadonlyTodo {
    title: string
    description: string
}

const todo: Readonly<ReadonlyTodo> = {
    title: "Hey",
    description: "foobar"
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property