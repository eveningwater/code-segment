const indexOfAll = <T>(arr: T[], val: T) =>
    arr.reduce<number[]>((acc, item, i) => (item === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0, 3]
indexOfAll([1, 2, 3], 4); // []