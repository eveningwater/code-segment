type FlattenDepth<
    T extends any[],
    S extends number = 1,
    U extends any[] = []
> = S extends U['length']
    ? T
    : T extends [infer F, ...infer R]
    ? F extends any[]
    ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
    : [F, ...FlattenDepth<R, S, U>]
    : T;

type aFlattenDepth = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type bFlattenDepth = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1