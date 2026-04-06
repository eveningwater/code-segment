const sortedLastIndex = <T>(arr: T[], n: T) => {
    const isDescending = arr[0] > arr[arr.length - 1];
    const index = arr
        .reverse()
        .findIndex(el => (isDescending ? n >= el : el <= n));
    return index === -1 ? arr.length : index;
};

sortedLastIndex([10, 20, 30, 30, 40], 30); // 4