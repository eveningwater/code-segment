const pick = <T>(obj: Record<string, T>, arr: string[]) =>
  arr.reduce<Record<string, T>>(
    (acc, key) => (key in obj && (acc[key] = obj[key]), acc),
    {},
  );

pick({ a: 1, b: "2", c: 3 }, ["a", "c"]); // { 'a': 1, 'c': 3 }
