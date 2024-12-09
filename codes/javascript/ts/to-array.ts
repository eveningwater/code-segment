const toArray = <T>(value: Iterable<T> | ArrayLike<T>): T[] =>
    Array.from ? Array.from(value) : Array.prototype.slice.call(value);
toArray('foo'); //["f", "o", "o"]