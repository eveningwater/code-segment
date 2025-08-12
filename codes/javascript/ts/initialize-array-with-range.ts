const initializeArrayWithRange = (end: number, start = 0, step = 1) =>
  Array.from(
    { length: Math.ceil((end - start + 1) / step) },
    (_, i) => start + i * step
  );

initializeArrayWithRange(5); // [0, 1, 2, 3, 4, 5]
initializeArrayWithRange(7, 3); // [3, 4, 5, 6, 7]
initializeArrayWithRange(9, 0, 2); // [0, 2, 4, 6, 8]
