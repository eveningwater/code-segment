const deepGet = <T>(obj: T, keys: (string | number)[]) =>
    keys.reduce(
        (o, i) => (o && o[i] !== null && o[i] !== undefined ? o[i] : null),
        obj
    );

const index = 2;
const data = {
    foo: {
        foz: [1, 2, 3],
        bar: {
            baz: ['a', 'b', 'c']
        }
    }
};
deepGet<typeof data>(data, ['foo', 'foz', index]); // get 3
deepGet<typeof data>(data, ['foo', 'bar', 'baz', 8, 'foz']); // null