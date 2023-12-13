
type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;
type Maximum<T extends any[], U = T[number], N extends any[] = []>
    = T extends [] ? never
    : Equal<U, N['length']> extends true ? U
    : Maximum<T, (U extends N['length'] ? never : U), [...N, unknown]>;


type MaximumRes1 = Maximum<[]>; // never
type MaximumRes2 = Maximum<[0, 2, 1]>; // 2
type MaximumRes3 = Maximum<[1, 20, 200, 150]>; // 200