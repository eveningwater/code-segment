const initial = <T>(arr: T[]): T[] => arr.slice(0, -1);

initial([1, 2, 3]); // [1, 2]