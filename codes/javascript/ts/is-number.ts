const isNumber = (val: unknown): val is number => typeof val === 'number' && val === val;

isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false