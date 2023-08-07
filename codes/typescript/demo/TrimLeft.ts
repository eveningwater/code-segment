type LeftSpace = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${LeftSpace}${infer R}`
  ? TrimLeft<R>
  : S;

type TrimLeftStr = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
