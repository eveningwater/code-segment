const pickBy = <T>(
  obj: Record<string, T>,
  fn: (value: T, key: string) => boolean,
) =>
  Object.keys(obj)
    .filter((key) => fn(obj[key], key))
    .reduce<Record<string, T>>(
      (acc, key) => (key in obj && (acc[key] = obj[key]), acc),
      {},
    );

pickBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number");
// { 'a': 1, 'c': 3 }
