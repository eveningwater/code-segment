type Path<T> = T extends Record<PropertyKey, unknown>
    ? {
        [P in keyof T]: [P, ...Path<T[P]>] | [P];
    }[keyof T]
    : never;
declare const example: {
    foo: {
        bar: {
            a: string
        }
        baz: {
            b: number
            c: number
        }
    }
}

type PathRes1 = Path<typeof example['foo']['bar']>; // ['a']
type PathRes2 = Path<typeof example['foo']['baz']>; // ['b'] | ['c'] 
type PathRes3 = Path<typeof example['foo']>; // ['bar'] | ['baz'] | ['bar', 'a'] | ['baz', 'b'] | ['baz', 'c']
type PathRes4 = Path<typeof example['foo']['bar']>; // ['a']