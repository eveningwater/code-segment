type Combination<T extends string[], E extends string = T[number], I = E> = I extends string ? I | `${I} ${Combination<T, Exclude<E, I>>}` : never;

// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<['foo', 'bar', 'baz']>