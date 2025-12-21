const objectToPairs = <T>(obj: ArrayLike<T> | { [key: string]: T })  => Object.entries(obj);

objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]