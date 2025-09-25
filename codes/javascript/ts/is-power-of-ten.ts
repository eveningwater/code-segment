const isPowerOfTen = (n: number) => Math.log10(n) % 1 === 0;

isPowerOfTen(1); // true
isPowerOfTen(10); // true
isPowerOfTen(20); // false