const allEqualBy = <T extends unknown>(arr: T[], fn: (v:T) => void) => arr.every(item => item === fn(arr[0]));

allEqualBy([1.1, 1.2, 1.3], Math.round); // true
allEqualBy([1.1, 1.3, 1.6], Math.round); // false