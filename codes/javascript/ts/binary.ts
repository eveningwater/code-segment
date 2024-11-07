const binary = <T, R>(handler: (a: T, b: T) => R) => (a: T, b: T) => handler(a, b);
['2', '1', '0'].map(Number).map(binary(Math.max)); // [2, 1, 2]