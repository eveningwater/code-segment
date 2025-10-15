// function juxt<T, R>(...fns: Array<(arg: T) => R>): (...args: T[]) => R[][];
// function juxt<Fns extends Array<(arg: any) => any>>(
//   ...fns: Fns
// ): <T extends Parameters<Fns[number]>[0]>(
//   ...args: T[]
// ) => {
//   [K in keyof Fns]: Fns[K] extends (arg: any) => infer R ? R[] : never;
// };

// function juxt<T, R>(...fns: Array<(a: T) => R>): (...args: T[]) => R[][] {
//   return (...args) => [...fns].map((fn) => [...args].map(fn));
// }


interface Juxt {
  <T, R>(...fns: Array<(arg: T) => R>): (...args: T[]) => R[][];
  <Fns extends Array<(arg: any) => any>>(...fns: Fns): <
    T extends Parameters<Fns[number]>[0]
  >(
    ...args: T[]
  ) => {
    [K in keyof Fns]: Fns[K] extends (arg: T) => infer R ? R[] : never;
  };
}

const juxt: Juxt =
  (...fns: Array<(arg: unknown) => unknown>) =>
  (...args: unknown[]) =>
    [...fns].map((fn) => [...args].map(fn));
juxt<number, number>(
  (x) => x + 1,
  (x) => x - 1,
  (x) => x * 10
)(1, 2, 3); // [[2, 3, 4], [0, 1, 2], [10, 20, 30]]
juxt(
  (s: string) => s.length,
  (s: string) => s.split(" ").join("-")
)("code segment"); // [[18], ['code-segment']]
