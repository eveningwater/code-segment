const spreadOver = <T,R>(fn: (...args: T[]) => R) => (argsArr: T[]) => fn(...argsArr);

const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3