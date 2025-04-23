const euclideanDistance = (a: number[], b: number[]) =>
  Math.hypot(...Object.keys(a).map((k) => b[k] - a[k]));

euclideanDistance([1, 1], [2, 3]); // ~2.2361
euclideanDistance([1, 1, 1], [2, 3, 2]); // ~2.4495
