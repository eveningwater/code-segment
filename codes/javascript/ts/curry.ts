const curry = <T>(fn: (...args: T[]) => T, arity = fn.length, ...args: T[]) =>
    arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2