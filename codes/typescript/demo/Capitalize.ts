type Capitalized<S extends string> = S extends `${infer X}${infer R}`
  ? `${Uppercase<X>}${R}`
  : S;
type capitalizedStr = Capitalized<'hello world'>; // expected to be 'Hello world'
