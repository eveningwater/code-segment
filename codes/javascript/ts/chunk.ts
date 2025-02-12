const chunk = <T>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, i * size + size)
  );
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
