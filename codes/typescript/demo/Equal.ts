type Equal<T, U> = (<X>() => X extends T ? 1 : 2) extends (<X>() => X extends U ? 1 : 2) ? true : false;

type EqualRes1 = Equal<any, any>; // true
type EqualRes2 = Equal<any, never>; // false
type EqualRes3 = Equal<string, never>; // false
type EqualRes4 = Equal<number, never>; // false
type EqualRes5 = Equal<number, string>; // false
type EqualRes6 = Equal<number, 1>; // false