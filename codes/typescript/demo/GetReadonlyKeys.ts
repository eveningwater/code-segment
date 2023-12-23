
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

type GetReadonlyKeys<
    T,
    U extends Readonly<T> = Readonly<T>,
    K extends keyof T = keyof T
> = K extends keyof T ? Equal<Pick<T, K>, Pick<U, K>> extends true ? K : never : never;

type GetReadonlyKeysRes1 = GetReadonlyKeys<Todo1>; // 'title'
type GetReadonlyKeysRes2 = GetReadonlyKeys<Todo2> // 'title' | 'description'


interface Todo1 {
    readonly title: string
    description: string
    completed: boolean
}

interface Todo2 {
    readonly title: string
    readonly description: string
    completed?: boolean
}