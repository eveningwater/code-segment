type FirstUniqueCharIndex<
    T extends string,
    U extends string[] = []
> = T extends ''
    ? -1
    : T extends `${infer F}${infer R}`
    ? F extends U[number]
    ? FirstUniqueCharIndex<R, [...U, F]>
    : R extends `${string}${F}${string}`
    ? FirstUniqueCharIndex<R, [...U, F]>
    : U['length']
    : never;

type FirstUniqueCharIndexRes1 = FirstUniqueCharIndex<'leetcode'> // 0
type FirstUniqueCharIndexRes2 = FirstUniqueCharIndex<'loveleetcode'> // 2
type FirstUniqueCharIndexRes3 = FirstUniqueCharIndex<'aabb'> // -1
type FirstUniqueCharIndexRes4 = FirstUniqueCharIndex<''> // -1
type FirstUniqueCharIndexRes5 = FirstUniqueCharIndex<'aaa'> // -1