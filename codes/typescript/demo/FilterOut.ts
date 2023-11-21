type FilterOut<T extends any[], U> = T extends [infer F, ...infer R] ? [F] extends [U] ? FilterOut<R, U> : [F, ...FilterOut<R, U>] : [];
type FilterOutRes1 = FilterOut<[], never> //  []
type FilterOutRes2 = FilterOut<[never], never> //  []
type FilterOutRes3 = FilterOut<['a', never], never> //  ['a']
type FilterOutRes4 = FilterOut<[1, never, 'a'], never> //  [1, 'a']
type FilterOutRes5 = FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined> //  [1, 'a', false]
type FilterOutRes6 = FilterOut<[number | null | undefined, never], never | null | undefined> //  [number | null | undefined]