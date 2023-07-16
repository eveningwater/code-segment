// type FirstArray<T extends any[]> = T extends [] ? never : T[0];
// type FirstArray<T extends any []> = T['length'] extends 0 ? never : T[0];
type FirstArray<T extends any[]> = T extends [infer A, ...infer rest]
  ? A
  : never;

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = FirstArray<arr1>; // expected to be 'a'
type head2 = FirstArray<arr2>; // expected to be 3
