const findLastIndex = <T, S>(
  arr: T[],
  handler: (value: number | T, i: number | T, array: T[]) => S
) =>
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => handler(val, i, arr))
    .pop() || [-1])[0];
findLastIndex([1, 2, 3, 4], (n) => n % 2 === 1); // 2 (index of the value 3)
findLastIndex([1, 2, 3, 4], (n) => n === 5); // -1 (default value when not found)
