type PermutationsOfTuple<T extends unknown[], A extends unknown[] = []> = T extends [infer F, ...infer R] ? [F, ...PermutationsOfTuple<[...R, ...A]>] | (R extends [] ? never : PermutationsOfTuple<R, [...A, F]>) : [];

type PermutationsOfTupleRes1 = PermutationsOfTuple<[]>; // []
type PermutationsOfTupleRes2 = PermutationsOfTuple<[any]>; // [any]
type PermutationsOfTupleRes3 = PermutationsOfTuple<[any, unknown]>; // [any, unknown] | [unknown, any]
type PermutationsOfTupleRes4 = PermutationsOfTuple<[any, unknown, never]>;
//   [any, unknown, never]
//   | [unknown, any, never]
//   | [unknown, never, any]
//   | [any, never, unknown]
//   | [never, any, unknown]
//   | [never, unknown, any]
type PermutationsOfTupleRes5 = PermutationsOfTuple<[1, number, unknown]>;
//   [1, number, unknown]
//     | [1, unknown, number]
//     | [number, 1, unknown]
//     | [unknown, 1, number]
//     | [number, unknown, 1]
//     | [unknown, number, 1]
