type ArrayMapCallback<T, U extends unknown> = (value: T, index: number, array: T[]) => U;
type RecordKey = string | number | symbol;
const averageBy = <T extends number | Record<RecordKey, number>>(arr: T[], handler: ArrayMapCallback<T, number> | RecordKey) =>
    arr
        .map(typeof handler === 'function' ? handler : val => val[handler])
        .reduce((acc, val) => acc + val, 0) / arr.length;

averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5