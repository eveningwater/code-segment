const indexOn = <T extends Record<string, any>>(arr: T[], key: string) =>
  arr.reduce<Record<string, Omit<T, typeof key>>>((acc, val) => {
    const { [key]: id, ...data } = val;
    if (typeof id === "string" || typeof id === "number") {
      acc[id as string] = data;
    }
    return acc;
  }, {});

indexOn(
  [
    { id: 10, name: "apple" },
    { id: 20, name: "orange" },
  ],
  "id"
);
// { '10': { name: 'apple' }, '20': { name: 'orange' } }
