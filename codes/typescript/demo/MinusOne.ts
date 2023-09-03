type ParseInt<T extends string> = T extends `${infer D extends number}`
    ? D
    : never;
type ReverseString<S extends string> = S extends `${infer F}${infer R}`
    ? `${R}${F}`
    : '';
type RemoveLeadingZeros<S extends string> = S extends '0'
    ? S
    : S extends `${'0'}${infer R}`
    ? `${RemoveLeadingZeros<R>}`
    : S;
type InternalMinusOne<S extends string> = S extends `${infer D extends number}${infer R}`
    ? D extends 0
    ? `9${InternalMinusOne<R>}`
    : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][D]}${R}`
    : never;
type MinusOne<T extends number> = ParseInt<
    RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>
>;
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
