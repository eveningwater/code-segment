const sortedIndex = <T>(arr: T[], n: T) => {
    const isDescending = arr[0] > arr[arr.length - 1];
    const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
    return index === -1 ? arr.length : index;
};

sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 40); // 1