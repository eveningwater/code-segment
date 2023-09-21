type StringToUnion<T extends string> = T extends `${infer A}${infer R}`
    ? A | StringToUnion<R>
    : never;
type AllCombinations<T extends string, U extends string = StringToUnion<T>> = [
    U
] extends [never]
    ? ''
    : '' | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U];
type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'