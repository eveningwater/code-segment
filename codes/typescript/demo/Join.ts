type Join<T extends any[], S extends string | number> = T extends [infer F, ...infer R] ? R['length'] extends 0 ? `${F & string}` : `${F & string}${S}${Join<R, S>}` : never;

type JoinRes = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type JoinRes1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type JoinRes2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type JoinRes3 = Join<["o"], "u">; // expected to be 'o'