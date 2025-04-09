const differenceWith = <T>(a: T[], b: T[], handler = (a: T, b: T) => a === b) =>
    a.filter(v1 => b.findIndex(v2 => handler(v1, v2)) === -1);

differenceWith(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0],
    (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2]
differenceWith([1, 1.2, 1.3], [1, 1.3, 1.5]); // [1.2]