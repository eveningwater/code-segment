type ArrayWithLength<
    T extends number,
    U extends any[] = []
> = U['length'] extends T ? U : ArrayWithLength<T, [true, ...U]>;
type GreaterThan<
    T extends number,
    U extends number
> = ArrayWithLength<U> extends [...ArrayWithLength<T>, ...infer _]
    ? false
    : true;

type GreaterThan1 = GreaterThan<2, 1>; //should be true
type GreaterThan2 = GreaterThan<1, 1>; //should be false
type GreaterThan3 = GreaterThan<10, 100>; //should be false
type GreaterThan4 = GreaterThan<111, 11>; //should be true