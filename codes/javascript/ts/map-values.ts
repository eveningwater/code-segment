export const mapValues = <T, U>(
  obj: Record<string, T>,
  fn: (value: T, key: string, obj: Record<string, T>) => U
) =>
  Object.keys(obj).reduce<Record<string, U>>((acc, item) => {
    acc[item] = fn(obj[item], item, obj);
    return acc;
  }, {});

const users = {
  fred: { user: "fred", age: 40 },
  pebbles: { user: "pebbles", age: 1 },
};
mapValues(users, (u) => u.age); // { fred: 40, pebbles: 1 }
