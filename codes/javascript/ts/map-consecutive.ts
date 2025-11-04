const mapConsecutive = <T, U = T>(arr: T[], n: number, fn: (arr: T[]) => U) =>
  arr.slice(n - 1).map((v, i) => fn(arr.slice(i, i + n)));

mapConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, (x) => x.join('-'));
// ['1-2-3', '2-3-4', '3-4-5', '4-5-6', '5-6-7', '6-7-8', '7-8-9', '8-9-10'];