const reduceSuccessive = <T>(arr: T[], fn: (acc: T, val: T, i: number, arr: T[]) => T, acc: T) =>
    arr.reduce(
        (res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res),
        [acc]
    );

reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0);
// [0, 1, 3, 6, 10, 15, 21]