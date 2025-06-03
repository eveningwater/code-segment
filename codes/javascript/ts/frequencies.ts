const frequencies = <T extends string>(arr: T[]) =>
  arr.reduce<Partial<Record<T, number>>>(
    (a, v) => ((a[v] = a[v] ? a[v] + 1 : 1), a),
    {}
  );

frequencies(["a", "b", "a", "c", "a", "a", "b"]); // { a: 4, b: 2, c: 1 }
frequencies([..."ball"]); // { b: 1, a: 1, l: 2 }
