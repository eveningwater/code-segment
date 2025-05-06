const findKey = <T, U>(
  obj: Record<string, T>,
  handler: (v: T, k: string, o: Record<string, T>) => U
) => Object.keys(obj).find((key) => handler(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true },
  },
  (x) => x["active"]
); // 'barney'
