type IsNegativeNumber<T extends number, U extends T = T> =
    number extends T
    ? never
    : T extends U
    ? [U] extends [T]
    ? `${T}` extends `-${infer _}`
    ? true
    : false
    : never
    : never;
type IsNegativeNumberRes1 = IsNegativeNumber<0>; // false
type IsNegativeNumberRes2 = IsNegativeNumber<number>; // never
type IsNegativeNumberRes3 = IsNegativeNumber<-1 | -2>; // never
type IsNegativeNumberRes4 = IsNegativeNumber<-1>; // true
type IsNegativeNumberRes5 = IsNegativeNumber<-1.9>; // true
type IsNegativeNumberRes6 = IsNegativeNumber<-100_000_000>; // true
type IsNegativeNumberRes7 = IsNegativeNumber<1>; // false
type IsNegativeNumberRes8 = IsNegativeNumber<1.9>; // false
type IsNegativeNumberRes9 = IsNegativeNumber<100_000_000>; // false