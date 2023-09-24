type isTuple<T> = T extends [never]
    ? false
    : T extends readonly any[]
    ? number extends T['length']
    ? false
    : true
    : false;
type isTupleCase1 = isTuple<[number]>; // true
type isTupleCase2 = isTuple<readonly [number]>; // true
type isTupleCase3 = isTuple<number[]>; // false