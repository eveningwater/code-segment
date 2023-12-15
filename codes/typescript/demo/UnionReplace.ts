type UnionReplace<T, U extends [any, any][]> = U extends [
    infer F extends [any, any],
    ...infer R extends [any, any][]
]
    ? UnionReplace<T extends F[0] ? F[1] : T, R>
    : T;

// string -> null
type UnionReplaceRes1 = UnionReplace<number | string, [[string, null]]>; // number | null
// string -> null
type UnionReplaceRes2 = UnionReplace<number | string, [[string, null], [Date, Function]]>; // number | null
// Date -> string; Function -> undefined
type UnionReplaceRes3 = UnionReplace<Function | Date | object, [[Date, string], [Function, undefined]]>; // undefined | string | object