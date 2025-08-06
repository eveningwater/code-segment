const indexBy = <T>(arr: T[], handler: (v: T, i: number, arr: T[]) => string | number) =>
    arr.reduce<Record<string, T>>((obj, v, i) => {
        obj[handler(v, i, arr)] = v;
        return obj;
    }, {});

indexBy(
    [
        { id: 10, name: 'apple' },
        { id: 20, name: 'orange' }
    ],
    x => x.id
);
// { '10': { id: 10, name: 'apple' }, '20': { id: 20, name: 'orange' } }