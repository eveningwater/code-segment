type Zip<
    T extends any[],
    U extends any[],
    R extends any[] = []
> = R['length'] extends T['length'] | U['length']
    ? R
    : Zip<T, U, [...R, [T[R['length']], U[R['length']]]]>;

type expZip = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]