const binarySearch = <T>(arr: T[], item:T) => {
    let l = 0,
        r = arr.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (arr[m] === item) {
            return m;
        } else if (arr[m] > item) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return -1;
};

binarySearch([1, 2, 3, 4, 5], 1); // 0
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1