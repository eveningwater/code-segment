type BinaryToDecimal<T extends string, U extends number[] = []> = T extends `${infer F}${infer R}` ?
    F extends '0' ? BinaryToDecimal<R, [...U, ...U]> : BinaryToDecimal<R, [...U, ...U, 0]> : U['length'];

type BinaryToDecimalRes1 = BinaryToDecimal<'10'>; //  2
type BinaryToDecimalRes2 = BinaryToDecimal<'0011'>; // 3
type BinaryToDecimalRes3 = BinaryToDecimal<'00000000'>; //  0
type BinaryToDecimalRes4 = BinaryToDecimal<'11111111'>; //  255
type BinaryToDecimalRes5 = BinaryToDecimal<'10101010'>; //  170