type RightSpace = ' ' | '\n' | '\t';
type TrimRight<S extends string> = S extends `${infer R}${RightSpace}`
  ? TrimRight<R>
  : S;

type TrimRightStr = TrimRight<'  Hello World  '>; // expected to be 'Hello World  '
