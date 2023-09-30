type IndexOf<T extends any[], I, C extends number[] = []> = T extends [infer F, ...infer R] ? (
    (<V>() => V extends F ? 1 : 0) extends (<V>() => V extends I ? 1 : 0) ? C['length'] : IndexOf<R, I, [...C, 0]>
) : -1;

type IndexOfRes = IndexOf<[1, 2, 3], 2>; // expected to be 1
type IndexOfRes1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type IndexOfRes2 = IndexOf<[0, 0, 0], 2>; // expected to be -1