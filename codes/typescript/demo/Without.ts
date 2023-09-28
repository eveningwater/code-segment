type toUnion<T> = T extends any[] ? T[number] : T;
type Without<T, U> = T extends [infer F, ...infer R]
    ? F extends toUnion<U>
    ? Without<R, U>
    : [F, ...Without<R, U>]
    : T;
type WithoutRes = Without<[1, 2], 1>; // expected to be [2]
type WithoutRes1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type WithoutRes2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []