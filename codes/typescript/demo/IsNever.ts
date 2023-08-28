type IsNever<T> = [T] extends [never] ? true : false;

type IsNeverA = IsNever<never> // expected to be true
type IsNeverB = IsNever<undefined> // expected to be false
type IsNeverC = IsNever<null> // expected to be false
type IsNeverD = IsNever<[]> // expected to be false
type IsNeverE = IsNever<number> // expected to be false