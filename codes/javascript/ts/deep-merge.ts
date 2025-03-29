const deepMerge = <T extends Record<string, any>, U extends Record<string, any>, H extends (k: string, aV: any, bV: any) => any>(a: T, b: U, handler: H) =>
    [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
        (acc, key) => ({ ...acc, [key]: handler(key, a[key], b[key]) }),
        {}
    );

deepMerge(
    { a: true, b: { c: [1, 2, 3] } },
    { a: false, b: { d: [1, 2, 3] } },
    (key, a, b) => (key === 'a' ? a && b : Object.assign({}, a, b))
);
// { a: false, b: { c: [ 1, 2, 3 ], d: [ 1, 2, 3 ] } }