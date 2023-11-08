type UnionToIntersection<T> = (
    T extends any ? (args: T) => any : never
) extends (args: infer I) => any
    ? I
    : never;
type UnionToIntersectionRes1 = UnionToIntersection<'foo' | 42 | true>; // 'foo' & 42 & true <=> never
type UnionToIntersectionRes2 = UnionToIntersection<(() => 'foo') | ((i: 42) => true)>; // (() => 'foo') & ((i: 42) => true)
