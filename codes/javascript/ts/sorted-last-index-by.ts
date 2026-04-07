const sortedLastIndexBy = <T>(arr: T[], n: T, fn: (v: T) => number) => {
    const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
    const val = fn(n);
    const index = arr
        .map(fn)
        .reverse()
        .findIndex(el => (isDescending ? val <= el : val >= el));
    return index === -1 ? 0 : arr.length - index;
};

sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1