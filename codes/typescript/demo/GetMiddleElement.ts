type GetMiddleElement<T extends any[]> = T['length'] extends 0 | 1 | 2
    ? T
    : T extends [infer _, ...infer M, infer _]
    ? GetMiddleElement<M>
    : never;

type GetMiddleElementRes1 = GetMiddleElement<[]>; // []
type GetMiddleElementRes2 = GetMiddleElement<[1, 2, 3, 4, 5]>; // [3]
type GetMiddleElementRes3 = GetMiddleElement<[1, 2, 3, 4, 5, 6]>; // [3, 4]
type GetMiddleElementRes4 = GetMiddleElement<[() => string]>; // [() => string]
type GetMiddleElementRes5 = GetMiddleElement<[() => number, '3', [3, 4], 5]>; // ['3', [3, 4]]
type GetMiddleElementRes6 = GetMiddleElement<[() => string, () => number]>; // [() => string, () => number]
type GetMiddleElementRes7 = GetMiddleElement<[never]>; // [never]