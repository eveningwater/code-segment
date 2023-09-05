type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

type StartsWithA = StartsWith<'abc', 'ac'> // expected to be false
type StartsWithB = StartsWith<'abc', 'ab'> // expected to be true
type StartsWithC = StartsWith<'abc', 'abcd'> // expected to be false