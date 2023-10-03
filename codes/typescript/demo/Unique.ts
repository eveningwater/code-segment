type Equal<T, U> = T extends U ? true : false;
type Includes<T, U> = U extends [infer F, ...infer R]
    ? Equal<T, F> extends true
    ? true
    : Includes<T, R>
    : false;
type Unique<T extends any[], U extends any[] = []> = T extends [infer F, ...infer R] ? Includes<F, U> extends true ? Unique<R, [...U]> : Unique<R, [...U, F]> : U;

type UniqueRes = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type UniqueRes1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type UniqueRes2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type UniqueRes3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type UniqueRes4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]