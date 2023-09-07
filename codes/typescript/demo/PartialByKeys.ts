type IntersectionToObj<T> = {
    [K in keyof T]: T[K]
}
type PartialByKeys<T, U> = IntersectionToObj<{
    [P in keyof T]?: T[P]
} & { [K in Exclude<keyof T, U>]: T[K] }>

interface PartialByKeysUser {
    name: string
    age: number
    address: string
}

type PartialByKeysUserPartialName = PartialByKeys<PartialByKeysUser, 'name'> // { name?:string; age:number; address:string }
