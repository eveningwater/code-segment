

type SplitParams<S extends string> = S extends `${infer E}&${infer R}`
    ? [E, ...SplitParams<R>]
    : [S];
type SetProperty<T, K extends PropertyKey, V extends any = true> = {
    [P in keyof T | K]: P extends K
    ? P extends keyof T
    ? T[P] extends V
    ? T[P]
    : T[P] extends any[]
    ? V extends T[P][number]
    ? T[P]
    : [...T[P], V]
    : [T[P], V]
    : V
    : P extends keyof T
    ? T[P]
    : never;
};
type MergeParams<T extends string[], M = {}> = T extends [
    infer E,
    ...infer R extends string[]
]
    ? E extends `${infer K}=${infer V}`
    ? MergeParams<R, SetProperty<M, K, V>>
    : E extends `${infer K}`
    ? MergeParams<R, SetProperty<M, K>>
    : never
    : M;


type ParseQueryString<S extends string> = S extends '' ? {} : MergeParams<SplitParams<S>>;

type ParseQueryStringRes1 = ParseQueryString<''>; //  {}
type ParseQueryStringRes2 = ParseQueryString<'k1'>; //  { k1: true }
type ParseQueryStringRes3 = ParseQueryString<'k1&k1'>; //  { k1: true }
type ParseQueryStringRes4 = ParseQueryString<'k1&k2'>; //  { k1: true; k2: true }
type ParseQueryStringRes5 = ParseQueryString<'k1=v1'>; //  { k1: 'v1' }
type ParseQueryStringRes6 = ParseQueryString<'k1=v1&k1=v2'>; //  { k1: ['v1', 'v2'] }
type ParseQueryStringRes7 = ParseQueryString<'k1=v1&k2=v2'>; //  { k1: 'v1'; k2: 'v2' }
type ParseQueryStringRes8 = ParseQueryString<'k1=v1&k2=v2&k1=v2'>; //  { k1: ['v1', 'v2']; k2: 'v2' }
type ParseQueryStringRes9 = ParseQueryString<'k1=v1&k2'>; //  { k1: 'v1'; k2: true }
type ParseQueryStringRes10 = ParseQueryString<'k1=v1&k1=v1'>; //  { k1: 'v1' }
type ParseQueryStringRes11 = ParseQueryString<'k1=v1&k1=v2&k1=v1'>; //  { k1: ['v1', 'v2'] }
type ParseQueryStringRes12 = ParseQueryString<'k1=v1&k2=v1&k1=v2&k1=v1'>; //  { k1: ['v1', 'v2']; k2: 'v1' }
type ParseQueryStringRes13 = ParseQueryString<'k1=v1&k2=v2&k1=v2&k1=v3'>; //  { k1: ['v1', 'v2', 'v3']; k2: 'v2' }
type ParseQueryStringRes14 = ParseQueryString<'k1=v1&k1'>; //  { k1: ['v1', true] }
type ParseQueryStringRes15 = ParseQueryString<'k1&k1=v1'>; //  { k1: [true, 'v1'] }