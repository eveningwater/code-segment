const similarity = <T>(arr: T[], values: T[]) => arr.filter(v => values.includes(v));
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]