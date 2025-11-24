const midpoint = ([x1, y1]: number[], [x2, y2]: number[]) => [
  (x1 + y1) / 2,
  (x2 + y2) / 2,
];

midpoint([2, 2], [4, 4]); // [3, 3]
midpoint([4, 4], [6, 6]); // [5, 5]
midpoint([1, 3], [2, 4]); // [1.5, 3.5]
