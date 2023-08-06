type Space = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft<R>
  : S;
type TrimLeftStr = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
