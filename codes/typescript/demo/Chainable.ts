type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ) => Chainable<{ [P in K]: V } & Omit<T, K>>;
  get: () => T;
};
declare const chainableConfig: Chainable;

const result = chainableConfig
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get();

// 期望 result 的类型是：
// interface Result {
//   foo: number;
//   name: string;
//   bar: {
//     value: string;
//   };
// }
// result.name;
// result.foo;
// result.bar.value
