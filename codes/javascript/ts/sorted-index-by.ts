const sortedIndexBy = <T>(arr: T[], n: T, fn: (v: T) => number) => {
    const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
    const val = fn(n);
    const index = arr.findIndex(el => (isDescending ? val >= (el as number) : val <= (el as number)));
    return index === -1 ? arr.length : index;
};

sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 0