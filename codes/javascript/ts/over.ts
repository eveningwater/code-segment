const over = <T,R>(...fns:((...args:T[]) => R)[]) => (...args:T[]) => [...fns].map(fn => fn.apply(null, args));

const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1, 5]