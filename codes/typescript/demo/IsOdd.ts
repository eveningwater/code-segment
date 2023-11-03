

type IsOdd<T extends number> = `${T}` extends `${number | ''}${| 1
    | 3
    | 5
    | 7
    | 9}`
    ? true
    : false;

type IsOddRes1 = IsOdd<2023>  // true>
type IsOddRes2 = IsOdd<1453>  // true>
type IsOddRes3 = IsOdd<1926>  // false>
type IsOddRes4 = IsOdd<number>  // false>