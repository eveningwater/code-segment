const isString = (val: unknown): val is string => typeof val === 'string';

isString('10'); // true
isString(10); // false