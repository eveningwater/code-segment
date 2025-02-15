const clampNumber = (num: number, a: number, b: number) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
clampNumber(2, 3, 5); // 3
clampNumber(1, -1, -5); // -1
