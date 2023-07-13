// @ts-ignore
type Pick<T, K extends keyof T> = {
    [R in K]: T[K]
}
interface PickTodo {
    title: string
    description: string
    completed: boolean
}

type PickTodoPreview = Pick<PickTodo, 'title' | 'completed'>
