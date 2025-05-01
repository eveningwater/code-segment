const filterUnique = <T>(arr: T[]) =>
  [...new Set(arr)].filter((i) => arr.indexOf(i) !== arr.lastIndexOf(i));
filterUnique([1, 2, 2, 3, 4, 4, 5]); // [2, 4]
