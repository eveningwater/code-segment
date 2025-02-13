const chunkIntoN = <T>(arr: T[], n: number) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_v, i) =>
    arr.slice(size * i, size * i + size)
  );
};

chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4); // [[1, 2], [3, 4], [5, 6], [7]]
