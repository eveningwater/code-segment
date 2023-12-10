type MakeCounter<
    T extends number,
    R extends number[] = []
> = R['length'] extends T | 999 ? R : MakeCounter<T, [...R, 1]>;
type SimpleAdd<T extends number, U extends number> = [...MakeCounter<T>, ...MakeCounter<U>][`length`];
type TwoSum<T extends number[], U extends number> =
    T extends [infer F extends number, ...infer R extends number[]] ?
    U extends SimpleAdd<F, R[number]> ? true : TwoSum<R, U>
    : false;
type TwoSumRes1 = TwoSum<[3, 3], 6>; //  true>
type TwoSumRes2 = TwoSum<[3, 2, 4], 6>; // true>
type TwoSumRes3 = TwoSum<[2, 7, 11, 15], 15>; //  false>
type TwoSumRes4 = TwoSum<[2, 7, 11, 15], 9>; //  true>
type TwoSumRes5 = TwoSum<[1, 2, 3], 0>; //  false>
type TwoSumRes6 = TwoSum<[1, 2, 3], 1>; //  false>
type TwoSumRes7 = TwoSum<[1, 2, 3], 2>; //  false>
type TwoSumRes8 = TwoSum<[1, 2, 3], 3>; //  true>
type TwoSumRes9 = TwoSum<[1, 2, 3], 4>; //  true>
type TwoSumRes10 = TwoSum<[1, 2, 3], 5>; //  true>
type TwoSumRes11 = TwoSum<[1, 2, 3], 6>; //  false>
type TwoSumRes12 = TwoSum<[3, 2, 0], 2>; //  true>