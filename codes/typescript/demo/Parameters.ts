// @ts-ignore
type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

const parametersFoo = (arg1: string, arg2: number): void => {};

type fooFunctionParamsType = Parameters<typeof parametersFoo>; // [arg1: string, arg2: number]
