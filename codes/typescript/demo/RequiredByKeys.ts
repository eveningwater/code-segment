type RequiredByKeys<T, U extends keyof T> = {
    [K in keyof T as K extends U ? never : K]: T[K]
} & {
        [K in keyof T as K extends U ? K : never]-?: T[K]
    } extends infer I ? {
        [K in keyof I]: I[K]
    } : never;

interface RequiredByKeysUser {
    name?: string
    age?: number
    address?: string
}

type UserRequiredName = RequiredByKeys<RequiredByKeysUser, 'name'> // { name: string; age?: number; address?: string }
