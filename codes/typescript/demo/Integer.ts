type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never;

let x = 1;
let y = 1 as const;
type IntegerRes1 = Integer<1> //  1
type IntegerRes2 = Integer<1.1> //  never
type IntegerRes3 = Integer<1.0> //  1
type IntegerRes4 = Integer<1.000000000> //  1
type IntegerRes5 = Integer<0.5> //  never
type IntegerRes6 = Integer<28.00> //  28
type IntegerRes7 = Integer<28.101> //  never
type IntegerRes8 = Integer<typeof x> //  never
type IntegerRes9 = Integer<typeof y> //  1