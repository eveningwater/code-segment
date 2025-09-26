const isPowerOfTwo = (n: number) => !!n && (n & (n - 1)) === 0;

isPowerOfTwo(0); // false
isPowerOfTwo(1); // true
isPowerOfTwo(8); // true