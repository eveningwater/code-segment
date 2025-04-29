const fibonacci = (n: number) =>
  Array.from({ length: n }).reduce<number[]>(
    (acc, _val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
fibonacci(6); // [0, 1, 1, 2, 3, 5]
