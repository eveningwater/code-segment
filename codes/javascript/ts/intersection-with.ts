const intersectionWith = <T>(a: T[], b: T[], handler: (x: T, y: T) => boolean) =>
  a.filter((x) => b.findIndex((y) => handler(x, y)) !== -1);

intersectionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1.5, 3, 0]
