const hasOne = <T, U>(arr: T[], handler: (item: T, index: number, array: T[]) => U) => arr.filter(handler).length === 1;

hasOne([1, 2], x => x % 2); // true
hasOne([1, 3], x => x % 2); // false