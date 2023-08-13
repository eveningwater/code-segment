type AppendArgument<fn, A> = fn extends (...args: infer R) => infer T
  ? (...args: [...R, A]) => T
  : never;
type AppendArgumentFn = (a: number, b: string) => number;

type AppendArgumentResult = AppendArgument<AppendArgumentFn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
