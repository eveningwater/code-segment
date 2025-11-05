const mapKeys = <T>(obj: Record<string, T>, fn: (val: T, key: string, obj: Record<string, T>) => string): Record<string, T> => Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
}, {});

mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }