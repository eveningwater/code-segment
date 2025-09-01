const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true