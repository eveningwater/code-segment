const digitize = (n: number) => [...`${Math.abs(n)}`].map(i => parseInt(i));

digitize(123); // [1, 2, 3]
digitize(-123); // [1, 2, 3]