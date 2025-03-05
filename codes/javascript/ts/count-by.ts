type CountByHandler<T> = (val: T) => string | number;

const countBy = <T, K extends keyof T>(arr:T[], handler: CountByHandler<T> | K): { [key: string]: number } =>
    arr
        .map(typeof handler === 'function' ? handler : (val: T) => val[handler] as string | number)
        .reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});

countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
countBy([{ count: 5 }, { count: 10 }, { count: 5 }], x => x.count);
// {5: 2, 10: 1}