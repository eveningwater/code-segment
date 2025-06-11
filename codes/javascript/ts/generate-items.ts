const generateItems = <T>(n: number, handler: (i: number) => T) =>
  Array.from({ length: n }, (_, i) => handler(i));

generateItems(10, Math.random);
// [0.21, 0.08, 0.40, 0.96, 0.96, 0.24, 0.19, 0.96, 0.42, 0.70]
