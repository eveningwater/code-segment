const findLastKey = <T, S>(
  obj: Record<string, T>,
  handler: (v: T, k: string, o: Record<string, T>) => S
) =>
  Object.keys(obj)
    .reverse()
    .find((key) => handler(obj[key], key, obj));
findLastKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true },
  },
  (x) => x["active"]
); // 'pebbles'
