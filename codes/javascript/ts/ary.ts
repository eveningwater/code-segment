const ary = <T,U>(fn:(...args:T[]) => U, n:number) => <A extends T>(...args:A[]) => fn(...args.slice(0, n));

const firstTwoMax = ary(Math.max, 2);
[[2, 6, 1], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]