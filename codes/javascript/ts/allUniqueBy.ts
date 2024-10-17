const allUniqueBy = <T extends unknown,U>(arr:T[], fn: (value: T, index: number, array: T[]) => U) => arr.length === new Set(arr.map<U>(fn)).size;
allUniqueBy([1.2, 2.4, 2.9], Math.round); // true
allUniqueBy([1.2, 2.3, 2.4], Math.round); // false