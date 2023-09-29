type FillZero<T extends string | number> = T extends `0.${infer R}` | `.${infer R}` ? `0.${R}` : `${T}`;
type Trunc<T extends string | number> = FillZero<T> extends `${infer F}.${infer _}`
    ? F
    : `${T}`;

type TruncRes1 = Trunc<0.1>; //  '0'
type TruncRes2 = Trunc<0.2>; //  '0'
type TruncRes3 = Trunc<1.234>; //  '1'
type TruncRes4 = Trunc<12.345>; //  '12'
type TruncRes5 = Trunc<-5.1>; //  '-5'
type TruncRes6 = Trunc<'.3'>; //  '0'
type TruncRes7 = Trunc<'1.234'>; //  '1'
type TruncRes8 = Trunc<'-10.234'>; //  '-10'
type TruncRes9 = Trunc<10>; //  '10'