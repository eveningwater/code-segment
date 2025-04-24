const everyNth = <T extends number>(arr: T[], nth: number) =>
  arr.filter((_e, i) => i % nth === nth - 1);
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
