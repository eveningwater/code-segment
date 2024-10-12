const allEqual = <T extends unknown>(arr:T[]) => arr.every(item => item === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true