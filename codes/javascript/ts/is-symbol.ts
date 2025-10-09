const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
isSymbol(10); // false