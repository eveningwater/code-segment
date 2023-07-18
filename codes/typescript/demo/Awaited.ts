// @ts-ignore
type Awaited<T> = T extends null | undefined
  ? T
  : T extends object & { then(onFulfilled: infer F, ...args: infer _): any }
  ? F extends (value: infer V, ...args: infer _) => any
    ? Awaited<V>
    : never
  : T;

type ExampleType = Promise<string>;

type Result = Awaited<ExampleType>; // string
