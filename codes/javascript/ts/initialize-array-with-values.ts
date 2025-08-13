const initializeArrayWithValues = (n: number, val: number = 0) =>
    Array.from({ length: n }).fill(val);

initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]