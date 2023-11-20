
type ToNumber<S extends string> = S extends `${infer N extends number}` ? N : never;

type ToNumberRes1 = ToNumber<'0'> //  0
type ToNumberRes2 = ToNumber<'5'> //  5
type ToNumberRes3 = ToNumber<'12'> //  12
type ToNumberRes4 = ToNumber<'27'> //  27
type ToNumberRes5 = ToNumber<'18@7_$%'> //  never