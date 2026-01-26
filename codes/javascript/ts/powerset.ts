const powerset = <T>(arr: T[]) =>
  arr.reduce<T[][]>((a, v) => a.concat(a.map(r => r.concat(v))), [[]]);

powerset([1, 2]); // [[], [1], [2], [1, 2]]