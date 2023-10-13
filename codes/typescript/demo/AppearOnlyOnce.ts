
type Equal<T, U> = T extends U ? true : false;
type ArrayHas<T extends any[], U> = T extends [infer F, ...infer R]
    ? Equal<F, U> extends true
    ? true
    : ArrayHas<R, U>
    : false;
type AppearOnlyOnce<
    T extends any[],
    K extends any[] = [],
    S extends any[] = []
> = T extends [infer F, ...infer R]
    ? ArrayHas<R, F> extends true
    ? AppearOnlyOnce<R, [...K, F], S>
    : ArrayHas<K, F> extends true
    ? AppearOnlyOnce<R, K, S>
    : AppearOnlyOnce<R, K, [...S, F]>
    : S;

type AppearOnlyOnceRes1 = AppearOnlyOnce<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]> //  [1, 4, 5]
type AppearOnlyOnceRes2 = AppearOnlyOnce<[2, 2, 3, 3, 6, 6, 6]> //  []
type AppearOnlyOnceRes3 = AppearOnlyOnce<[1, 2, 3]> //  [1, 2, 3]