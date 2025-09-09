const isFunction = (val: unknown): val is Function => typeof val === 'function';

isFunction('x'); // false
isFunction((x: unknown) => x); // true