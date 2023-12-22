type FillZero<S1 extends string, S2 extends string, _Result1 extends string = ``, _Result2 extends string = ``> =
    `` extends S1 & S2 ? [_Result1, _Result2] :
    FillZero<
        S1 extends `${any}${infer R}` ? R : ``,
        S2 extends `${any}${infer R}` ? R : ``,
        S1 extends `${infer F}${any}` ? `${_Result1}${F}` : `0${_Result1}`,
        S2 extends `${infer F}${any}` ? `${_Result2}${F}` : `0${_Result2}`
    >;

type BitwiseXOR<S1 extends string, S2 extends string, _FZS extends [string, string] = FillZero<S1, S2>> =
    _FZS[0] extends `${infer F1}${infer R1}` ?
    _FZS[1] extends `${infer F2}${infer R2}` ?
    `${[F1 & F2] extends [never] ? 1 : 0}${BitwiseXOR<R1, R2, [R1, R2]>}` :
    `` :
    ``;

type BitwiseXORRes1 = BitwiseXOR<'0', '1'>; // '1'
type BitwiseXORRes2 = BitwiseXOR<'1', '1'>; // '0'
type BitwiseXORRes3 = BitwiseXOR<'10', '1'>; // '11'
type BitwiseXORRes4 = BitwiseXOR<'110', '1'>; // '111'
type BitwiseXORRes5 = BitwiseXOR<'101', '11'>; // '110'