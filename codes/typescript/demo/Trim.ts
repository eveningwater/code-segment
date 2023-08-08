type TrimSpace = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${TrimSpace}${infer R}${TrimSpace}`
  ? Trim<R>
  : S;

type TrimStr = Trim<'  Hello World  '>; // expected to be 'Hello World'
