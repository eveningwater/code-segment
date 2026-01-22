const pipeAsyncFunctions =
  <T>(...fns: Array<(arg: T) => Promise<T> | T>) =>
  (arg: T) =>
    fns.reduce<Promise<T>>((p, f) => p.then(f), Promise.resolve(arg));

const sum = pipeAsyncFunctions(
  (x: number) => x + 1,
  (x: number) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 1000)),
  (x: number) => x + 3,
  async (x: number) => (await x) + 4,
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();
