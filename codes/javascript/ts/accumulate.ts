const accumulate = <T extends number>(...args: T[]) =>
    args.reduce<number[]>((acc, n) => [...acc, n + +acc.slice(-1)], []);

accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]