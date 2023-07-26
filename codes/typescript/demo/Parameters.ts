// @ts-ignore
type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

const foo = (arg1: string, arg2: number): void => {};

type fooFunctionParamsType = Parameters<typeof foo>; // [arg1: string, arg2: number]
