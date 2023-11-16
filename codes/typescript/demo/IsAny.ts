type IsAny<T> = 0 extends (1 & T) ? true : false;

let anyVar;

type IsAnyRes1 = IsAny<string>; // false
type IsAnyRes2 = IsAny<any>; // true
type IsAnyRes3 = IsAny<never>; // false
type IsAnyRes4 = IsAny<typeof anyVar>; // true