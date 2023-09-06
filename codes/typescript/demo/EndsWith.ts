type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
    ? true
    : false;

type EndsWithA = EndsWith<'abc', 'bc'>; // expected to be true
type EndsWithB = EndsWith<'abc', 'abc'>; // expected to be true
type EndsWithC = EndsWith<'abc', 'd'>; // expected to be false