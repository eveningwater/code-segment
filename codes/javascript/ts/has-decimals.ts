const hasDecimals = (num: number) => num % 1 !== 0;

hasDecimals(1); // false
hasDecimals(1.001); // true