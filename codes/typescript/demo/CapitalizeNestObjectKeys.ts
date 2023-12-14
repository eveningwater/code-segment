type CapitalizeNestObjectKeys<T> = T extends readonly any[] ? {
    [K in keyof T]: CapitalizeNestObjectKeys<T[K]>
} : T extends Record<keyof T, any> ? {
    [K in keyof T as Capitalize<K & string>]: CapitalizeNestObjectKeys<T[K]>
} : T;

type foo = {
    foo: string
    bars: [{ foo: string }]
}

type Foo = {
    Foo: string
    Bars: [{
        Foo: string
    }]
}

type CapitalizeNestObjectKeysRes = CapitalizeNestObjectKeys<foo>; // Foo