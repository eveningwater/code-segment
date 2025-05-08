const findLast = <T, S>(
  arr: T[],
  handler: (value: T, index: number, array: T[]) => S
) => arr.filter(handler).pop();
findLast([1, 2, 3, 4], (n) => n % 2 === 1); // 3
