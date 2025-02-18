const coalesceFactory = <T>(valid: (arg: T) => boolean) =>
    (...args: T[]): T | undefined =>
        args.find(valid);
const customCoalesce = coalesceFactory<string | null | number | undefined>(
    v => ![null, undefined, '', NaN].includes(v)
);
customCoalesce(undefined, null, NaN, '', 'Waldo'); // 'Waldo'