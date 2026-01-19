const partitionBy = <T, U>(
  arr: T[],
  fn: (item: T, index: number, array: T[]) => U,
) =>
  arr.reduce<{ res: T[][]; last?: U }>(
    ({ res, last }, v, i, arr) => {
      const next = fn(v, i, arr);
      if (next !== last) {
        res.push([v]);
      } else {
        res[res.length - 1].push(v);
      }
      return { res, last: next };
    },
    { res: [] },
  ).res;

const numbers = [1, 1, 3, 3, 4, 5, 5, 5];
partitionBy(numbers, (n) => n % 2 === 0); // [[1, 1, 3, 3], [4], [5, 5, 5]]
partitionBy(numbers, (n) => n); // [[1, 1], [3, 3], [4], [5, 5, 5]]
