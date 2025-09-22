const isObjectLike = <T>(val:T) => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false