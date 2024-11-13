type BothHandler<T, U> = (...args: T[]) => U;
const both =
    <T, U>(f: BothHandler<T, U>, g: BothHandler<T, U>) =>
        (...args: T[]) =>
            f(...args) && g(...args);

const isEven = (num: number) => num % 2 === 0;
const isPositive = (num: number) => num > 0;
const isPositiveEven = both(isEven, isPositive);
isPositiveEven(4); // true
isPositiveEven(-2); // false