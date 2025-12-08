const nthArg = (n: number) => <T>(...args: T[]) => args.slice(n)[0];

const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
last(1, 2, 3, 4, 5); // 5