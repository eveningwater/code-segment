declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
}>;
const promiseAllPromise1 = Promise.resolve(3);
const promiseAllPromise2 = 42;
const promiseAllPromise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// 应推导出 `Promise<[number, 42, string]>`
const promiseAllRes = PromiseAll([
  promiseAllPromise1,
  promiseAllPromise2,
  promiseAllPromise3
] as const);
