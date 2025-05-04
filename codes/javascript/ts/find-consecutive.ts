const findConsecutive = <T>(arr: T[], n: number) =>
  arr.slice(n - 1).map((_v, i) => arr.slice(i, i + n));

findConsecutive([1, 2, 3, 4, 5], 2);
// [[1, 2], [2, 3], [3, 4], [4, 5]]
