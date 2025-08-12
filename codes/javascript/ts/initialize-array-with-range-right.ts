const initializeArrayWithRangeRight = (end: number, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

initializeArrayWithRangeRight(5); // [5, 4, 3, 2, 1, 0]
initializeArrayWithRangeRight(7, 3); // [7, 6, 5, 4, 3]
initializeArrayWithRangeRight(9, 0, 2); // [8, 6, 4, 2, 0]
