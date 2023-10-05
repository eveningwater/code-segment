type ConstructTuple<L extends number, O extends string = `${L}`, C extends unknown[] = []> = O extends `${infer F}${infer R}` ? ConstructTuple<L, R, N<C>[keyof N & F]> : C;

type N<T extends unknown[] = []> = {
    '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T],
    '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown],
    '2': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown],
    '3': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown],
    '4': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown],
    '5': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown],
    '6': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown, unknown],
    '7': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown, unknown, unknown],
    '8': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown],
    '9': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown],
}

type ConstructTupleRes1 = ConstructTuple<0> // []
type ConstructTupleRes2 = ConstructTuple<2> // [unknown, unknown]
type ConstructTupleRes3 = ConstructTuple<999>['length'] // 999
type ConstructTupleRes4 = ConstructTuple<1000>['length'] // 1000