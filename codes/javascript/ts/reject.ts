const reject = <T>(pred: (...args: T[]) => boolean, arr: T[]) => arr.filter((...args) => !pred(...args as T[]));

reject(x => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]
reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']);
// ['Pear', 'Kiwi']