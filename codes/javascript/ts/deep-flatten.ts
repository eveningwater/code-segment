const deepFlatten = <T>(arr: (T | T[])[]): T[] =>
    ([] as T[]).concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]