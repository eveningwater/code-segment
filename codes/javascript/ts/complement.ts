const complement =
    <T>(fn: (...arg0: T[]) => boolean) =>
        (...args: T[]) =>
            !fn(...args);

const isEven = (num:number) => num % 2 === 0;
const isOdd = complement(isEven);
isOdd(2); // false
isOdd(3); // true