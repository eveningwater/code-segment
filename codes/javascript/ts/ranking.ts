const ranking = <T>(arr: T[], compFn: (a: T, b: T) => boolean) =>
  arr.map(a => arr.filter(b => compFn(a, b)).length + 1);

ranking([8, 6, 9, 5], (a, b) => a < b);
// [2, 3, 1, 4]
ranking(['c', 'a', 'b', 'd'], (a, b) => a.localeCompare(b) > 0);
// [3, 1, 2, 4]
