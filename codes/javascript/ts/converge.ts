type ConvergeHandler<T, R> = (...args: T[]) => R;
type Converger<U, R> = (...args: U[]) => R;

const converge = <T, U, R1, R2>(
    converger: Converger<U, R1>,
    handlers: Array<ConvergeHandler<T, R2>>
) => (...args: T[]) => converger(...handlers.map(h => h.apply(null, args)) as U[]);

const average = converge<number[], number, number, number>(
    (a, b) => a / b,
    [arr => arr.reduce((a: number, v: number) => a + v, 0), arr => arr.length]
);
average([1, 2, 3, 4, 5, 6, 7]); // 4