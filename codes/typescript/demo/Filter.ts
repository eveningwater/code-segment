type Filter<T extends any[], U> = T extends [infer F, ...infer R]
    ? F extends U
    ? [F, ...Filter<R, U>]
    : Filter<R, U>
    : [];

type Falsy = false | 0 | '' | null | undefined
type FilterRes1 = Filter<[0, 1, 2], 2> //  [2]
type FilterRes2 = Filter<[0, 1, 2], 0 | 1> //  [0, 1]
type FilterRes3 = Filter<[0, 1, 2], Falsy> //  [0]
