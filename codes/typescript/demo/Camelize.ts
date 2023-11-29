type SnakeToCamel<
    S extends string,
    B extends boolean = false
> = S extends `${infer F}_${infer R}`
    ? `${B extends true ? Capitalize<F> : F}${SnakeToCamel<R, true>}`
    : B extends true
    ? Capitalize<S>
    : S;

type BaseTypes = number | boolean | symbol | bigint | Function;

type Camelize<T> = {
    default: {
        [K in keyof T as Camelize<K>]: Camelize<T[K]>
    },
    array: T extends [infer F, ...(infer R)]
    ? [Camelize<F>, ...Camelize<R>]
    : [],
    string: SnakeToCamel<T & string>
    baseType: T,
}[
    T extends any[]
    ? 'array'
    : T extends BaseTypes
    ? 'baseType'
    : T extends string
    ? 'string'
    /** default */
    : 'default'
];
type CamelizeRes = Camelize<{
    some_prop: string
    prop: { another_prop: string }
    array: [
        { snake_case: string },
        { another_element: { yet_another_prop: string } },
        { yet_another_element: string },
    ]
}>;
// {
//   someProp: string
//   prop: { anotherProp: string }
//   array: [
//     { snakeCase: string },
//     { anotherElement: { yetAnotherProp: string } },
//     { yetAnotherElement: string },
//   ]
// }
