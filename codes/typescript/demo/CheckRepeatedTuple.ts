

type CheckRepeatedTuple<T extends any[]> = T extends [infer F, ...infer R]
    ? F extends R[number]
    ? true
    : CheckRepeatedTuple<R>
    : false;

type CheckRepeatedTupleRes1 = CheckRepeatedTuple<[number, number, string, boolean]>; // true
type CheckRepeatedTupleRes2 = CheckRepeatedTuple<[number, string]>; // false
type CheckRepeatedTupleRes3 = CheckRepeatedTuple<[1, 2, 3]>; // false
type CheckRepeatedTupleRes4 = CheckRepeatedTuple<[1, 2, 1]>; // true
type CheckRepeatedTupleRes5 = CheckRepeatedTuple<[]>; // false
type CheckRepeatedTupleRes6 = CheckRepeatedTuple<string[]>; // false