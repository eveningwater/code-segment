const bucketSort = (arr:number[], size = 5) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const buckets = Array.from<number,number[]>(
        { length: Math.floor((max - min) / size) + 1 },
        () => []
    );
    arr.forEach(val => {
        buckets[Math.floor((val - min) / size)].push(val);
    });
    return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};

bucketSort([6, 3, 4, 1]); // [1, 3, 4, 6]